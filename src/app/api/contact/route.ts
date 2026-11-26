import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONSENT_TEXT, POLICY_VERSION } from "@/content/legal/owner";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
  consent?: boolean;
  policyVersion?: string;
  locale?: string;
  website?: string;
  elapsedMs?: number;
};

/** A person can't fill in name, email and message faster than this. */
const MIN_FILL_MS = 3000;

/**
 * Bot check: the hidden honeypot field is filled in, or the form was sent
 * too fast, or the request skipped the form entirely (no timing at all).
 */
function looksLikeBot(body: ContactBody) {
  if (body.website) return true;
  const elapsed = body.elapsedMs;
  return typeof elapsed !== "number" || !Number.isFinite(elapsed) || elapsed < MIN_FILL_MS;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  const TO_EMAIL = process.env.RESEND_TO_EMAIL;
  const FROM_EMAIL = process.env.RESEND_FROM_EMAIL;
  const API_KEY = process.env.RESEND_API_KEY;

  if (!API_KEY || !TO_EMAIL || !FROM_EMAIL) {
    return NextResponse.json(
      {
        error:
          "Missing environment variables. Add RESEND_API_KEY, RESEND_TO_EMAIL, and RESEND_FROM_EMAIL.",
      },
      { status: 500 },
    );
  }

  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // Pretend success so bots don't learn they were caught; nothing is sent.
  if (looksLikeBot(body)) {
    console.warn("Contact form: bot submission dropped", {
      honeypot: Boolean(body.website),
      elapsedMs: body.elapsedMs,
    });
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required" },
      { status: 400 },
    );
  }

  if (body.consent !== true) {
    return NextResponse.json({ error: "Consent required" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  if (name.length > 200 || email.length > 320 || message.length > 5000) {
    return NextResponse.json({ error: "Payload too large" }, { status: 400 });
  }
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  // Consent record: proves the sender ticked the checkbox before sending.
  const consentAt = new Date().toLocaleString("uk-UA", {
    timeZone: "Europe/Kyiv",
    dateStyle: "short",
    timeStyle: "medium",
  });
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "невідомо";
  const userAgent = request.headers.get("user-agent") || "невідомо";
  const policyVersion = (body.policyVersion ?? "").slice(0, 32) || "невідомо";
  const consentLocale = body.locale === "ru" ? "ru" : "uk";
  const consentText = `${CONSENT_TEXT[consentLocale].before} ${CONSENT_TEXT[consentLocale].link}`;

  try {
    const resend = new Resend(API_KEY);
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Нове повідомлення з сайту — Advokat Veprytskyi & ko: вiд - ${escapeHtml(name)}`,
      html: `
        <h2>Повідомлення з контактної форми</h2>
        <p><strong>Ім'я:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Повідомлення:</strong></p>
        <p>${safeMessage}</p>
        <hr />
        <h3>Згода на обробку персональних даних</h3>
        <p><strong>Згода:</strong> так</p>
        <p><strong>Текст згоди:</strong> «${consentText}» (мова форми: ${consentLocale})</p>
        <p><strong>Версія політики (у формі):</strong> ${escapeHtml(policyVersion)}</p>
        <p><strong>Чинна версія політики (на сервері):</strong> ${POLICY_VERSION}</p>
        <p><strong>Дата і час (Київ):</strong> ${consentAt}</p>
        <p><strong>IP:</strong> ${escapeHtml(ip)}</p>
        <p><strong>Браузер:</strong> ${escapeHtml(userAgent.slice(0, 300))}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message ?? "Failed to send email" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}