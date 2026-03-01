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
    "bg-[#4A7C6F] text-white font-semibold hover:bg-[#3A6357] shadow-md shadow-[#4A7C6F]/20 hover:shadow-lg hover:shadow-[#4A7C6F]/30",
  secondary:
    "bg-[#D4943A] text-white font-semibold hover:bg-[#C08432] shadow-md shadow-[#D4943A]/20",
  outline:
    "border-2 border-[#4A7C6F] text-[#4A7C6F] font-semibold hover:bg-[#4A7C6F] hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
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
  const classes = `inline-flex items-center justify-center transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

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
