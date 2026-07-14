"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

const navHrefs = [
  { href: "/", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/services", key: "services" as const },
  { href: "/contacts", key: "contacts" as const },
];

export function Header() {
  const t = useTranslations("Nav");
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="pointer-events-none fixed top-[5px] left-0 right-0 z-50 flex justify-center px-3 sm:px-4">
      <div
        className={[
          "pointer-events-auto w-full max-w-[1280px]",
          "rounded-[18px]",
          "border border-white/40 bg-white/55 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.65)]",
          "backdrop-blur-[20px] backdrop-saturate-150",
          "dark:border-white/10 dark:bg-black/45 dark:shadow-[0_8px_32px_rgba(0,0,0,0.45),0_2px_8px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.08)]",
          "transition-[box-shadow,background-color] duration-300",
        ].join(" ")}
      >
        <div className="flex h-[var(--header-height)] items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6">
          <Link
            href="/"
            className="shrink-0 transition-transform duration-200 hover:scale-[1.03]"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/assets/logo.svg"
              alt={t("logoAlt")}
              width={140}
              height={52}
              className="h-9 w-auto sm:h-10"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label={t("mainAria")}
          >
            {navHrefs.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                    active
                      ? "bg-black/5 text-foreground dark:bg-white/10"
                      : "text-foreground/75 hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {t(link.key)}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <LanguageSwitcher />
            <ThemeToggle />

            <button
              type="button"
              className="cursor-pointer inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-black/5 md:hidden dark:hover:bg-white/10"
              aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? (
                <CloseIcon className="size-5" />
              ) : (
                <MenuIcon className="size-5" />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav
            className="border-t border-black/5 px-3 pb-3 pt-1 md:hidden dark:border-white/10"
            aria-label={t("mobileAria")}
          >
            <ul className="flex flex-col gap-0.5">
              {navHrefs.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={[
                        "block rounded-2xl px-4 py-2.5 text-sm font-medium transition-colors",
                        active
                          ? "bg-black/5 text-accent dark:bg-white/10"
                          : "text-foreground/90 hover:bg-black/5 hover:text-accent dark:hover:bg-white/10",
                      ].join(" ")}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMobileOpen(false)}
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
