"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

const pageLinks = [
  { href: "/", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/services", key: "servicesList" as const },
  { href: "/contacts", key: "contacts" as const },
  { href: "/sitemap", key: "sitemap" as const },
] as const;

const serviceKeys = [
  "criminal",
  "civil",
  "corporate",
  "family",
  "commercial",
  "consulting",
] as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Sitemap() {
  const t = useTranslations("Sitemap");
  const tServices = useTranslations("Services.items");
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? { initial: false as const, whileInView: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 32 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.25 },
          transition: { duration: 0.7, delay, ease: easeOut },
        };

  return (
    <section className="relative overflow-hidden bg-[#fefdfd] py-20 sm:py-28 dark:bg-[#0c1929]">
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6">
        <motion.p
          className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase dark:text-accent-light"
          {...fadeUp(0)}
        >
          {t("title")}
        </motion.p>

        <motion.h1
          className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
          {...fadeUp(0.08)}
        >
          <span className="bg-gradient-to-r from-accent to-[#5f8796] bg-clip-text text-transparent dark:from-accent-light dark:to-accent">
            {t("title")}
          </span>
        </motion.h1>

        <motion.p
          className="mt-4 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg dark:text-white/75"
          {...fadeUp(0.16)}
        >
          {t("description")}
        </motion.p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Pages section */}
          <motion.div {...fadeUp(0.24)}>
            <h2 className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase dark:text-accent-light">
              {t("pages")}
            </h2>
            <ul className="space-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-2xl border border-foreground/10 bg-white/55 px-4 py-3 text-sm font-medium text-foreground/80 shadow-sm transition-colors hover:border-accent/40 hover:bg-white/70 hover:text-accent dark:border-white/10 dark:bg-white/10 dark:text-white/75 dark:hover:border-accent-light/40 dark:hover:bg-white/20 dark:hover:text-accent-light"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services section */}
          <motion.div className="sm:col-span-2" {...fadeUp(0.32)}>
            <h2 className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase dark:text-accent-light">
              {t("services")}
            </h2>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {serviceKeys.map((key, index) => (
                <motion.li
                  key={key}
                  {...(reduceMotion
                    ? {}
                    : {
                        initial: { opacity: 0, y: 16 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: true },
                        transition: {
                          duration: 0.45,
                          delay: 0.4 + index * 0.06,
                          ease: easeOut,
                        },
                      })}
                >
                  <Link
                    href="/services"
                    className="block rounded-2xl border border-foreground/10 bg-white/55 px-4 py-3 text-sm font-medium text-foreground/80 shadow-sm transition-colors hover:border-accent/40 hover:bg-white/70 hover:text-accent dark:border-white/10 dark:bg-white/10 dark:text-white/75 dark:hover:border-accent-light/40 dark:hover:bg-white/20 dark:hover:text-accent-light"
                  >
                    {tServices(`${key}.title`)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}