import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-[#E8DFD0] bg-white p-6 ${
        hover
          ? "transition-all duration-300 hover:shadow-xl hover:shadow-[#4A7C6F]/5 hover:-translate-y-1"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
