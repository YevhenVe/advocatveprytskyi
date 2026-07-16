"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";

type Consent = null | "accepted" | "declined";

export function CookieBanner() {
  const t = useTranslations("CookieBanner");
  const [consent, setConsent] = useState<Consent>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent") as Consent | null;
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
    }
    setMounted(true);
  }, []);

  function handleAccept() {
    localStorage.setItem("cookie-consent", "accepted");
    setConsent("accepted");
  }

  function handleDecline() {
    localStorage.setItem("cookie-consent", "declined");
    setConsent("declined");
  }

  if (!mounted || consent !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] flex justify-center px-3 pb-3 sm:px-4 sm:pb-4">
      <div
        className={[
          "w-full max-w-[1280px]",
          "rounded-[18px]",
          "border border-white/40 bg-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.65)]",
          "backdrop-blur-[20px] backdrop-saturate-150",
          "dark:border-white/10 dark:bg-gray-900/70 dark:shadow-[0_8px_32px_rgba(0,0,0,0.45),0_2px_8px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.08)]",
          "flex flex-col items-start gap-3 px-5 py-4 sm:flex-row sm:items-center sm:gap-4 sm:px-6 sm:py-4",
        ].join(" ")}
      >
        <p className="text-sm leading-relaxed text-foreground/85 sm:flex-1">
          {t("message")}{" "}
          <Link
            href="/privacy"
            className="text-accent underline transition-colors hover:text-accent-light"
          >
            {t("privacyLink")}
          </Link>
        </p>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={handleDecline}
            className={[
              "cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
              "border border-white/40 text-foreground/80 hover:bg-black/5 hover:text-foreground",
              "dark:border-white/10 dark:hover:bg-white/10",
            ].join(" ")}
          >
            {t("decline")}
          </button>

          <button
            type="button"
            onClick={handleAccept}
            className="cursor-pointer rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-accent/85"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}