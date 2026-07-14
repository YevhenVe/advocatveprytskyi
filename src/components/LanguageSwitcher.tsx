"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";

const locales = routing.locales;

export function LanguageSwitcher() {
  const t = useTranslations("Language");
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();

  const activeIndex = Math.max(0, locales.indexOf(locale));

  function switchLocale(next: AppLocale) {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  }

  return (
    <div
      role="group"
      aria-label={t("switchAria")}
      className="relative isolate flex h-9 items-center overflow-hidden rounded-full border border-foreground/10 bg-white/40 p-0.5 backdrop-blur-md dark:border-white/15 dark:bg-white/5"
    >
      {/*
        Position with `left` (not transform) and no box-shadow —
        avoids GPU composite ghosts after locale remount.
      */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-gradient-to-b from-[#9fc4d0] to-accent transition-[left] duration-300 ease-out"
        style={{
          left: activeIndex === 0 ? "2px" : "calc(50%)",
        }}
      />

      {locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => switchLocale(code)}
            aria-pressed={active}
            className={[
              "cursor-pointer relative z-10 min-w-[2.5rem] flex-1 rounded-full px-2.5 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-200",
              active
                ? "text-white"
                : "text-foreground/60 hover:text-foreground dark:text-white/55 dark:hover:text-white",
            ].join(" ")}
          >
            {t(code)}
          </button>
        );
      })}
    </div>
  );
}
