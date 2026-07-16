"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { PrimaryButton } from "@/components/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function NotFoundPage() {
  const t = useTranslations("NotFound");

  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 py-24 min-h-screen">
      {/* Background decorative elements */}
      <div
        className="pointer-events-none absolute -left-32 top-1/4 size-80 rounded-full bg-accent/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 top-1/3 size-96 rounded-full bg-accent-light/10 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-lg flex-col items-center text-center">
        {/* 404 number */}
        <motion.div
          className="mb-2 select-none text-[11rem] font-bold leading-[0.8] tracking-tight"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <span className="bg-gradient-to-br from-accent-light to-accent bg-clip-text text-transparent">
            404
          </span>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="mb-10 h-px w-24 bg-gradient-to-r from-transparent via-accent/50 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25, ease: easeOut }}
        />

        {/* Title */}
        <motion.h1
          className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: easeOut }}
        >
          {t("title")}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-4 max-w-sm text-lg leading-relaxed text-foreground/65"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: easeOut }}
        >
          {t("description")}
        </motion.p>

        {/* Actions */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55, ease: easeOut }}
        >
          <motion.div
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <PrimaryButton href="/">
              {t("ctaHome")}
            </PrimaryButton>
          </motion.div>

          <motion.div
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <SecondaryButton href="/contacts">
              {t("ctaContact")}
            </SecondaryButton>
          </motion.div>
        </motion.div>

        {/* Helpful links hint */}
        <motion.p
          className="mt-12 text-sm text-foreground/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7, ease: easeOut }}
        >
          {t("orBrowse")}{" "}
          <Link
            href="/services"
            className="font-medium text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-light hover:decoration-accent-light/40"
          >
            {t("servicesLink")}
          </Link>
          {" "}{t("orBrowse2")}
        </motion.p>
      </div>
    </main>
  );
}