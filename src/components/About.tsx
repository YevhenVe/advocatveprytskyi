"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

const easeOut = [0.22, 1, 0.36, 1] as const;
const valueKeys = ["trust", "privacy", "individual"] as const;

export function About() {
  const t = useTranslations("About");
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

  const slideIn = (delay = 0) =>
    reduceMotion
      ? { initial: false as const, whileInView: { opacity: 1, x: 0 } }
      : {
          initial: { opacity: 0, x: 40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, amount: 0.25 },
          transition: { duration: 0.8, delay, ease: easeOut },
        };

  return (
    <section className="relative overflow-hidden bg-[#fefdfd] py-20 sm:py-28 dark:bg-[#0c1929]">
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <div className="max-w-xl lg:max-w-none">
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
              {t("brand")}
            </span>
          </motion.h1>

          <motion.div
            className="mt-6 space-y-5 text-base leading-relaxed text-foreground/70 sm:text-lg dark:text-white/75"
            {...fadeUp(0.16)}
          >
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
          </motion.div>

          <motion.ul className="mt-8 flex flex-wrap gap-2" {...fadeUp(0.28)}>
            {valueKeys.map((key, index) => (
              <motion.li
                key={key}
                className="rounded-full border border-foreground/10 bg-white/55 px-4 py-2 text-xs font-medium text-foreground/70 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-white/75"
                {...(reduceMotion
                  ? {}
                  : {
                      initial: { opacity: 0, y: 12 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: {
                        duration: 0.45,
                        delay: 0.35 + index * 0.08,
                        ease: easeOut,
                      },
                    })}
              >
                {t(`values.${key}`)}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div className="relative w-full" {...slideIn(0.15)}>
          <div className="relative overflow-hidden rounded-[28px] border border-white/50 bg-white/40 p-2 shadow-[0_20px_60px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-xl dark:border-white/10 dark:bg-black/30 dark:shadow-[0_20px_60px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] sm:aspect-[5/6] lg:aspect-[4/5]">
              <Image
                src="/assets/about.jpeg"
                alt={t("imageAlt")}
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover object-center"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent dark:from-black/40"
                aria-hidden
              />
            </div>
          </div>

          <motion.div
            className="absolute -bottom-4 left-4 right-4 rounded-[22px] border border-white/50 bg-white/70 px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:left-6 sm:right-auto sm:max-w-[16rem] dark:border-white/10 dark:bg-black/50 dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.6, delay: 0.45, ease: easeOut },
                })}
          >
            <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase dark:text-accent-light">
              {t("cardBrand")}
            </p>
            <p className="mt-1 text-sm font-medium text-foreground dark:text-white">
              {t("cardText")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
