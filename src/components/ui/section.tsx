import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
};

export function Section({ children, className = "", id, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${dark ? "bg-white" : "bg-[#FFFBF5]"} ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  className = "",
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`mb-16 text-center ${className}`}>
      <h2 className="font-serif text-3xl font-bold tracking-tight text-[#2C2418] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[#8B7E6A]">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-6 flex items-center justify-center gap-2">
        <div className="h-px w-12 bg-[#E8DFD0]" />
        <div className="h-2 w-2 rounded-full bg-[#4A7C6F]" />
        <div className="h-px w-12 bg-[#E8DFD0]" />
      </div>
    </div>
  );
}
