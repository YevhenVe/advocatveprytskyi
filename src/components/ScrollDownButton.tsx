"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

export function ScrollDownButton() {
  const t = useTranslations("Hero");
  const reduceMotion = useReducedMotion();

  function handleClick() {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <motion.div
      className="absolute inset-x-0 bottom-[40px] z-20 flex justify-center"
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.button
        type="button"
        onClick={handleClick}
        aria-label={t("scrollDown")}
        className="cursor-pointer inline-flex size-12 items-center justify-center rounded-full border border-foreground/10 bg-white/40 text-foreground/80 backdrop-blur-md transition-colors duration-300 hover:border-accent/40 hover:bg-white/70 hover:text-foreground sm:size-14 dark:border-white/15 dark:bg-white/5 dark:text-white/85 dark:hover:border-accent-light/40 dark:hover:bg-white/10 dark:hover:text-white"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, 8, 0],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        whileHover={reduceMotion ? undefined : { scale: 1.06 }}
        whileTap={reduceMotion ? undefined : { scale: 0.96 }}
      >
        <ArrowDownIcon className="size-5 sm:size-6" />
      </motion.button>
    </motion.div>
  );
}

function ArrowDownIcon({ className }: { className?: string }) {
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
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  );
}
