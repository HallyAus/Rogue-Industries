import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-[#292524] bg-[#1C1917] p-6 ${
        hover
          ? "transition-all duration-300 hover:border-[#D97706]/30 hover:shadow-lg hover:shadow-amber-900/10 hover:-translate-y-1"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
