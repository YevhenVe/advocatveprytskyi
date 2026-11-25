import type { Metadata } from "next";
import { POLICY_DATE, SITE_URL } from "@/content/legal/owner";
import type { LegalDocumentContent } from "@/content/legal/types";

type Locale = "uk" | "ru";

export function legalLocale(locale: string): Locale {
  return locale === "ru" ? "ru" : "uk";
}

export function buildLegalMetadata(
  content: LegalDocumentContent,
  locale: Locale,
  slug: string,
): Metadata {
  const url = `${SITE_URL}/${locale}/${slug}`;
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        uk: `${SITE_URL}/uk/${slug}`,
        ru: `${SITE_URL}/ru/${slug}`,
        "x-default": `${SITE_URL}/uk/${slug}`,
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url,
      siteName: "AV & KO",
      locale: locale === "uk" ? "uk_UA" : "ru_UA",
      type: "website",
    },
  };
}

const cardClassName =
  "rounded-[18px] border border-white/40 bg-white/55 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-[20px] backdrop-saturate-150 dark:border-white/10 dark:bg-black/45 dark:shadow-[0_8px_32px_rgba(0,0,0,0.45),0_2px_8px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-8";

type Props = {
  content: LegalDocumentContent;
  locale: Locale;
};

export function LegalDocument({ content, locale }: Props) {
  const date = POLICY_DATE[locale];

  return (
    <main className="min-h-dvh flex flex-1 flex-col bg-[#fefdfd] pt-[calc(var(--header-height)+1.25rem)] dark:bg-[#0c1929]">
      <div className="mx-auto w-full max-w-[900px] px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 mt-4 sm:mt-8">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            {content.badge}
          </span>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            {content.titleBefore}
            <span className="text-accent">{content.titleAccent}</span>
          </h1>
          <div className="mt-4 space-y-1 text-sm text-foreground/60">
            <p>
              {content.effectiveLabel}: {date}
            </p>
            <p>
              {content.updatedLabel}: {date}
            </p>
          </div>
        </div>

        <div className={`mb-10 ${cardClassName}`}>
          <p className="text-sm leading-relaxed text-foreground/85">
            {content.intro}
          </p>
        </div>

        <div className="space-y-6">
          {content.sections.map((section) => (
            <section key={section.title} className={cardClassName}>
              <h2 className="mb-4 text-xl font-semibold text-foreground sm:text-2xl">
                {section.title}
              </h2>

              {section.paragraphs?.map((p) => (
                <p
                  key={p}
                  className="mb-3 text-sm leading-relaxed text-foreground/85 last:mb-0"
                >
                  {p}
                </p>
              ))}

              {section.list && (
                <ul className="mt-3 space-y-3">
                  {section.list.map((item) => (
                    <li
                      key={`${item.label ?? ""}${item.text}`}
                      className="flex gap-2 text-sm leading-relaxed"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-foreground/85">
                        {item.label && (
                          <strong className="text-foreground">
                            {item.label}{" "}
                          </strong>
                        )}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {section.note && (
                <p className="mt-3 rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 text-sm leading-relaxed text-foreground/85">
                  {section.note}
                </p>
              )}

              {section.contacts && (
                <div className="mt-4 space-y-2">
                  {section.contacts.map((c) => (
                    <p
                      key={c.label}
                      className="text-sm leading-relaxed text-foreground/85"
                    >
                      <strong className="text-foreground">{c.label}</strong>{" "}
                      {c.value}
                    </p>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
