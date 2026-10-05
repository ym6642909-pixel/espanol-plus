"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold transition-all duration-200";

  const variantClasses =
    variant === "primary"
      ? "bg-white text-[#0b1020] hover:scale-[1.02] hover:bg-white/90"
      : "border border-white/10 bg-white/5 text-white hover:bg-white/10";

  const disabledClasses = disabled
    ? "pointer-events-none cursor-not-allowed opacity-50"
    : "";

  const classes = `${baseClasses} ${variantClasses} ${disabledClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
