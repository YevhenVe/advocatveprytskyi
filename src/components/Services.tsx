"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const easeOut = [0.22, 1, 0.36, 1] as const;
const serviceKeys = [
  "criminal",
  "civil",
  "corporate",
  "family",
  "commercial",
  "consulting",
] as const;

export function Services() {
  const t = useTranslations("Services");
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
    <section className="relative overflow-hidden bg-[#edeef0] py-20 sm:py-28 dark:bg-[#2d363d]">
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <motion.p
          className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase dark:text-accent-light"
          {...fadeUp(0)}
        >
          {t("eyebrow")}
        </motion.p>

        <motion.h1
          className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
          {...fadeUp(0.08)}
        >
          {t("titleBefore")}{" "}
          <span className="bg-gradient-to-r from-accent to-[#5f8796] bg-clip-text text-transparent dark:from-accent-light dark:to-accent">
            {t("titleAccent")}
          </span>
        </motion.h1>

        <motion.p
          className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg dark:text-white/75"
          {...fadeUp(0.14)}
        >
          {t("intro")}
        </motion.p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((key, index) => (
            <motion.article
              key={key}
              className="group rounded-[24px] border border-white/50 bg-white/50 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-black/30 dark:shadow-[0_12px_40px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]"
              {...fadeUp(0.1 + index * 0.06)}
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-light to-accent text-sm font-semibold text-white shadow-md">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h2 className="text-lg font-semibold text-foreground dark:text-white">
                {t(`items.${key}.title`)}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65 dark:text-white/65">
                {t(`items.${key}.description`)}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-12 flex flex-wrap items-center gap-3"
          {...fadeUp(0.5)}
        >
          <Link
            href="/contacts"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-b from-[#9fc4d0] to-accent px-8 text-sm font-semibold tracking-wide text-white uppercase shadow-[0_10px_30px_rgba(123,161,175,0.4)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            {t("ctaConsult")}
          </Link>
          <Link
            href="/about"
            className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/10 bg-white/40 px-6 text-sm font-medium text-foreground/80 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-white/70 dark:border-white/15 dark:bg-white/5 dark:text-white/85"
          >
            {t("ctaTeam")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
