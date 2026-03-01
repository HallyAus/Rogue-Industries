import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-[#0C0A09] font-semibold hover:from-[#F59E0B] hover:to-[#D97706] shadow-lg shadow-amber-900/20",
  secondary:
    "bg-[#92400E] text-[#FAFAF9] font-semibold hover:bg-[#D97706]",
  outline:
    "border-2 border-[#D97706] text-[#D97706] font-semibold hover:bg-[#D97706] hover:text-[#0C0A09]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
