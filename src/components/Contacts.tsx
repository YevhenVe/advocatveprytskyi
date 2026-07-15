"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";

const easeOut = [0.22, 1, 0.36, 1] as const;

const email = "consult@advokat-veprytskyi.com";
const mapsUrl = "https://maps.app.goo.gl/E7ToXd6M6J2akbAq6";

const phones = [
  { operator: "Kyivstar", display: "(098) 709-46-68", tel: "+380987094668" },
  { operator: "Vodafone", display: "(099) 606-55-37", tel: "+380996065537" },
  { operator: "Kyivstar", display: "(098) 227-92-45", tel: "+380982279245" },
] as const;

export function Contacts() {
  const t = useTranslations("Contacts");
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? { initial: false as const, whileInView: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.65, delay, ease: easeOut },
        };

  return (
    <section className="relative overflow-hidden bg-[#fefdfd] py-20 sm:py-28 dark:bg-[#0c1929]">
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
        <div>
          <motion.p
            className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase dark:text-accent-light"
            {...fadeUp(0)}
          >
            {t("eyebrow")}
          </motion.p>

          <motion.h1
            className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
            {...fadeUp(0.08)}
          >
            {t("titleBefore")}{" "}
            <span className="bg-gradient-to-r from-accent to-[#5f8796] bg-clip-text text-transparent dark:from-accent-light dark:to-accent">
              {t("titleAccent")}
            </span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-md text-base leading-relaxed text-foreground/70 sm:text-lg dark:text-white/75"
            {...fadeUp(0.14)}
          >
            {t("intro")}
          </motion.p>

          <div className="mt-8 space-y-3">
            <motion.div
              className="rounded-[22px] border border-white/50 bg-white/50 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-xl dark:border-white/10 dark:bg-black/30 dark:shadow-[0_10px_30px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)]"
              {...fadeUp(0.18)}
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase dark:text-accent-light">
                {t("addressLabel")}
              </p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 block text-sm font-medium leading-relaxed text-foreground transition-colors hover:text-accent dark:text-white dark:hover:text-accent-light"
              >
                {t("address")}
              </a>
            </motion.div>

            <motion.div
              className="rounded-[22px] border border-white/50 bg-white/50 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-xl dark:border-white/10 dark:bg-black/30 dark:shadow-[0_10px_30px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)]"
              {...fadeUp(0.24)}
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase dark:text-accent-light">
                {t("emailLabel")}
              </p>
              <a
                href={`mailto:${email}`}
                className="mt-1.5 block text-sm font-medium text-foreground transition-colors hover:text-accent dark:text-white dark:hover:text-accent-light"
              >
                {email}
              </a>
            </motion.div>

            <motion.div
              className="rounded-[22px] border border-white/50 bg-white/50 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-xl dark:border-white/10 dark:bg-black/30 dark:shadow-[0_10px_30px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)]"
              {...fadeUp(0.3)}
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase dark:text-accent-light">
                {t("phonesLabel")}
              </p>
                <div className="flex flex-row gap-2">
                  <ul className="mt-3 space-y-2.5">
                  {phones.map((phone) => (
                    <li
                      key={phone.tel}
                      className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1"
                    >
                      <span className="text-sm font-medium text-foreground/55 dark:text-white/50">
                        {phone.operator}
                      </span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-3 space-y-2.5">
                  {phones.map((phone) => (
                    <li
                      key={phone.tel}
                      className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1"
                    >
                      <a
                        href={`tel:${phone.tel}`}
                        className="text-sm font-medium tabular-nums text-foreground transition-colors hover:text-accent dark:text-white dark:hover:text-accent-light"
                      >
                        {phone.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="rounded-[28px] border border-white/50 bg-white/50 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.1),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-xl sm:p-8 dark:border-white/10 dark:bg-black/30 dark:shadow-[0_20px_60px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)]"
          {...fadeUp(0.2)}
        >
          <h2 className="text-lg font-semibold text-foreground dark:text-white">
            {t("formTitle")}
          </h2>
          <p className="mt-2 text-sm text-foreground/60 dark:text-white/60">
            {t("formIntro")}
          </p>

          {/* Mount after hydration so password-manager extensions
              (data-sharkid etc.) cannot break SSR/client match */}
          <ContactForm />

          <p className="mt-5 text-xs text-foreground/50 dark:text-white/45">
            {t("orGoTo")}{" "}
            <Link
              href="/services"
              className="font-medium text-accent underline-offset-2 hover:underline dark:text-accent-light"
            >
              {t("servicesLink")}
            </Link>
            {t("orGoToEnd")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const fieldClassName =
  "w-full rounded-2xl border border-foreground/10 bg-white/70 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-accent dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/35 dark:focus:border-accent-light";

function ContactForm() {
  const t = useTranslations("Contacts");
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? t("errorGeneric"));
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(t("errorGeneric"));
    }
  }

  if (!mounted) {
    return (
      <div className="mt-6 space-y-4" aria-hidden>
        <div className="space-y-1.5">
          <div className="h-3 w-12 rounded bg-foreground/10" />
          <div className="h-12 rounded-2xl bg-foreground/5" />
        </div>
        <div className="space-y-1.5">
          <div className="h-3 w-12 rounded bg-foreground/10" />
          <div className="h-12 rounded-2xl bg-foreground/5" />
        </div>
        <div className="space-y-1.5">
          <div className="h-3 w-20 rounded bg-foreground/10" />
          <div className="h-32 rounded-2xl bg-foreground/5" />
        </div>
        <div className="h-12 w-40 rounded-full bg-foreground/10" />
      </div>
    );
  }

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-xs font-medium text-foreground/70 dark:text-white/70"
        >
          {t("nameLabel")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          disabled={status === "loading"}
          className={fieldClassName}
          placeholder={t("namePlaceholder")}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-xs font-medium text-foreground/70 dark:text-white/70"
        >
          {t("emailFieldLabel")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={status === "loading"}
          className={fieldClassName}
          placeholder={t("emailPlaceholder")}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-medium text-foreground/70 dark:text-white/70"
        >
          {t("messageLabel")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={status === "loading"}
          className={`resize-y ${fieldClassName}`}
          placeholder={t("messagePlaceholder")}
        />
      </div>

      {status === "success" && (
        <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400" role="status">
          {t("success")}
        </p>
      )}

      {status === "error" && (
        <p className="text-sm font-medium text-red-600 dark:text-red-400" role="alert">
          {errorMessage ?? t("errorGeneric")}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-b from-[#9fc4d0] to-accent px-8 text-sm font-semibold tracking-wide text-white uppercase shadow-[0_10px_30px_rgba(123,161,175,0.4)] transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? t("sending") : t("submit")}
      </button>
    </form>
  );
}
