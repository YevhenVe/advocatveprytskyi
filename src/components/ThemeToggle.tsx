"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.cookie = `theme=${theme};path=/;max-age=31536000;samesite=lax`;
}

function readTheme(): Theme {
  const stored = localStorage.getItem("theme") as Theme | null;
  if (stored === "light" || stored === "dark") return stored;

  const match = document.cookie.match(/(?:^|; )theme=(light|dark)(?:;|$)/);
  if (match?.[1] === "light" || match?.[1] === "dark") {
    return match[1];
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const t = useTranslations("Theme");
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = readTheme();
    setTheme(initial);
    applyTheme(initial);
    localStorage.setItem("theme", initial);
    setMounted(true);
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? t("toLight") : t("toDark")}
      className="cursor-pointer inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-black/5 dark:hover:bg-white/10"
    >
      {mounted && theme === "dark" ? (
        <img src="/assets/sun.svg" alt="" className="size-5" aria-hidden />
      ) : (
        <img src="/assets/moon.svg" alt="" className="size-5" aria-hidden />
      )}
    </button>
  );
}