import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function SecondaryButton({ href, children, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex h-12 items-center justify-center rounded-full border border-foreground/10 bg-white/40 px-6 text-sm font-medium text-foreground/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/70 hover:text-foreground sm:h-14 dark:border-white/15 dark:bg-white/5 dark:text-white/85 dark:hover:border-accent-light/40 dark:hover:bg-white/10 dark:hover:text-white",
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}