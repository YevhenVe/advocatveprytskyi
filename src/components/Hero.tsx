"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ScrollDownButton } from "./ScrollDownButton";

const easeOut = [0.22, 1, 0.36, 1] as const;

const highlightKeys = ["criminal", "civil", "corporate"] as const;
const statItems = [
  { value: "10+", key: "years" as const },
  { value: "500+", key: "cases" as const },
  { value: "24/7", key: "support" as const },
];

export function Hero() {
  const t = useTranslations("Hero");
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? { initial: false, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: easeOut },
        };

  const fadeIn = (delay = 0) =>
    reduceMotion
      ? { initial: false, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.9, delay, ease: easeOut },
        };

  const slideRight = (delay = 0) =>
    reduceMotion
      ? { initial: false, animate: { opacity: 1, x: 0, y: 0 } }
      : {
          initial: { opacity: 0, x: 36, y: 16 },
          animate: { opacity: 1, x: 0, y: 0 },
          transition: { duration: 0.75, delay, ease: easeOut },
        };

  return (
    <section
      id="golovna"
      className="relative flex h-screen min-h-[100vh] items-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        {...(reduceMotion
          ? { initial: false, animate: { opacity: 1, scale: 1 } }
          : {
              initial: { opacity: 0, scale: 1.06 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 1.2, ease: easeOut },
            })}
      >
        <Image
          src="/assets/herobackground.jpg"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
      </motion.div>

      <motion.div
        className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-white via-white/20 to-transparent dark:hidden"
        aria-hidden
        {...fadeIn(0.1)}
      />

      <motion.div
        className="absolute inset-0 hidden bg-gradient-to-r from-[#0c1929]/88 via-[#0c1929]/55 to-[#0c1929]/15 dark:block"
        aria-hidden
        {...fadeIn(0.1)}
      />
      <div
        className="absolute inset-0 hidden bg-gradient-to-t from-[#0a1422]/55 via-transparent to-[#0c1929]/25 dark:block"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] items-end gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.div
            className="mb-6 inline-flex max-w-full items-center gap-3 rounded-2xl border border-accent/20 bg-white/60 py-1.5 pl-1.5 pr-4 shadow-[0_4px_20px_rgba(15,23,42,0.06)] backdrop-blur-md dark:border-white/10 dark:bg-black/35 dark:shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
            {...fadeUp(0.15)}
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-light to-accent text-[10px] font-bold tracking-wider text-white shadow-inner">
              AV
            </span>
            <span
              className="hidden h-4 w-px shrink-0 bg-accent/35 sm:block dark:bg-white/20"
              aria-hidden
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/75 dark:text-white/80">
              {t("badge")}
            </span>
          </motion.div>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-foreground uppercase sm:text-5xl lg:text-6xl dark:text-white">
            <motion.span className="block" {...fadeUp(0.28)}>
              {t("titleLine1")}
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-accent to-[#5f8796] bg-clip-text text-transparent dark:from-accent-light dark:to-accent"
              {...fadeUp(0.4)}
            >
              {t("titleLine2")}
            </motion.span>
          </h1>

          <motion.p
            className="mt-6 max-w-md text-lg leading-relaxed text-foreground/70 sm:text-xl dark:text-white/85"
            {...fadeUp(0.52)}
          >
            {t("subtitleLine1")}
            <br className="hidden sm:block" /> {t("subtitleLine2")}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            {...fadeUp(0.64)}
          >
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              <Link
                href="/contacts"
                className={[
                  "group relative inline-flex h-12 items-center justify-center overflow-hidden sm:h-14",
                  "rounded-full px-9 text-sm font-semibold tracking-wide text-white uppercase",
                  "bg-gradient-to-b from-[#9fc4d0] to-accent",
                  "shadow-[0_10px_30px_rgba(123,161,175,0.45),0_4px_12px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.45)]",
                  "transition-shadow duration-300 ease-out",
                  "hover:from-accent-light hover:to-[#8fb6c4]",
                  "hover:shadow-[0_16px_40px_rgba(123,161,175,0.5),0_8px_18px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.55)]",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  "dark:focus-visible:outline-accent-light",
                ].join(" ")}
              >
                <span className="relative z-10">{t("ctaContact")}</span>
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-white/0 to-white/25 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-foreground/10 bg-white/40 px-6 text-sm font-medium text-foreground/80 backdrop-blur-md transition-colors duration-300 hover:border-accent/40 hover:bg-white/70 hover:text-foreground sm:h-14 dark:border-white/15 dark:bg-white/5 dark:text-white/85 dark:hover:border-accent-light/40 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {t("ctaServices")}
              </Link>
            </motion.div>
          </motion.div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {highlightKeys.map((key, index) => (
              <motion.li
                key={key}
                className="rounded-full border border-foreground/10 bg-white/45 px-3.5 py-1.5 text-xs font-medium text-foreground/65 backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                {...fadeUp(0.72 + index * 0.08)}
                whileHover={
                  reduceMotion ? undefined : { y: -2, scale: 1.04 }
                }
              >
                {t(`highlights.${key}`)}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex lg:items-end lg:justify-end">
          <div className="w-full max-w-sm space-y-4">
            <motion.div
              className="rounded-[28px] border border-white/50 bg-white/45 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl dark:border-white/10 dark:bg-black/35 dark:shadow-[0_20px_60px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)]"
              {...slideRight(0.55)}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -14,
                      scale: 1.03,
                      transition: { type: "spring", stiffness: 320, damping: 18 },
                    }
              }
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase dark:text-accent-light">
                {t("whyTitle")}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70 dark:text-white/75">
                {t("whyText")}
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {statItems.map((stat, index) => (
                  <motion.div
                    key={stat.key}
                    className="rounded-2xl border border-white/60 bg-white/55 px-2 py-3 text-center shadow-sm dark:border-white/10 dark:bg-white/5"
                    {...(reduceMotion
                      ? { initial: false, animate: { opacity: 1, y: 0 } }
                      : {
                          initial: { opacity: 0, y: 12 },
                          animate: { opacity: 1, y: 0 },
                          transition: {
                            duration: 0.45,
                            delay: 0.85 + index * 0.1,
                            ease: easeOut,
                          },
                        })}
                  >
                    <div className="text-lg font-semibold tracking-tight text-foreground dark:text-white">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[10px] leading-tight text-foreground/55 dark:text-white/55">
                      {t(`stats.${stat.key}`)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 rounded-[24px] border border-white/50 bg-white/40 px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-black/30 dark:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
              {...slideRight(0.75)}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -12,
                      scale: 1.03,
                      transition: { type: "spring", stiffness: 320, damping: 18 },
                    }
              }
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-light to-accent text-white shadow-md">
                <ShieldIcon className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground dark:text-white">
                  {t("privacyTitle")}
                </p>
                <p className="text-xs text-foreground/55 dark:text-white/55">
                  {t("privacyText")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-28 z-10 px-4 sm:px-6 lg:hidden"
        {...fadeUp(0.8)}
      >
        <div className="mx-auto flex max-w-[1280px] gap-2 overflow-x-auto rounded-[22px] border border-white/50 bg-white/50 p-2 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-black/40">
          {statItems.map((stat) => (
            <div
              key={stat.key}
              className="squircle min-w-[4.5rem] flex-1 px-0 py-2.5 text-center"
            >
              <div className="text-base font-semibold text-foreground dark:text-white">
                {stat.value}
              </div>
              <div className="text-[10px] text-foreground/55 dark:text-white/55">
                {t(`stats.${stat.key}`)}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <ScrollDownButton />
    </section>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 3 5 6v5c0 5 3.2 8.4 7 9.8 3.8-1.4 7-4.8 7-9.8V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
