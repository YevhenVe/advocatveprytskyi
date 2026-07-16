import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
};

export function SubmitButton({ children, disabled = false, className = "" }: Props) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={[
        "group relative inline-flex h-12 w-full cursor-pointer items-center justify-center overflow-hidden sm:h-14 sm:w-auto",
        "rounded-full px-8 text-sm font-semibold tracking-wide text-white uppercase",
        "bg-gradient-to-b from-[#9fc4d0] to-accent",
        "shadow-[0_10px_30px_rgba(123,161,175,0.45),0_4px_12px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.45)]",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-0.5",
        "hover:from-accent-light hover:to-[#8fb6c4]",
        "hover:shadow-[0_16px_40px_rgba(123,161,175,0.5),0_8px_18px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.55)]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        "dark:focus-visible:outline-accent-light",
        "disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:-translate-y-0",
        className,
      ].join(" ")}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-white/0 to-white/25 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
    </button>
  );
}