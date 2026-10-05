import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
