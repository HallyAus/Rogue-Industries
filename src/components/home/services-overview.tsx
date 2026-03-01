"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { SERVICES } from "@/lib/constants";

function ServiceIcon({ icon }: { icon: "piano" | "video" | "music" }) {
  const icons = {
    piano: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <line x1="6" y1="4" x2="6" y2="14" />
        <line x1="10" y1="4" x2="10" y2="14" />
        <line x1="14" y1="4" x2="14" y2="14" />
        <line x1="18" y1="4" x2="18" y2="14" />
        <rect x="4" y="4" width="3" height="10" rx="0.5" className="fill-current opacity-30" />
        <rect x="8" y="4" width="3" height="10" rx="0.5" className="fill-current opacity-30" />
        <rect x="13" y="4" width="3" height="10" rx="0.5" className="fill-current opacity-30" />
      </svg>
    ),
    video: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="5" width="14" height="14" rx="2" />
        <path d="M16 10l5-3v10l-5-3z" />
      </svg>
    ),
    music: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  };

  return icons[icon];
}

export function ServicesOverview() {
  return (
    <Section>
      <SectionHeader
        title="How I Can Help You"
        subtitle="Whether you prefer face-to-face connection or the flexibility of online learning, there's a path for you."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {SERVICES.map((service, index) => (
          <ScrollReveal key={service.title} delay={index * 0.1}>
            <Link href={service.href} className="group block h-full">
              <div className="relative h-full overflow-hidden rounded-2xl border border-[#E8DFD0] bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-[#4A7C6F]/5 hover:-translate-y-2">
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4A7C6F]/10 text-[#4A7C6F] transition-all duration-300 group-hover:bg-[#4A7C6F] group-hover:text-white group-hover:scale-110">
                    <ServiceIcon icon={service.icon} />
                  </div>

                  <h3 className="mb-3 text-xl font-serif font-bold text-[#2C2418] transition-colors group-hover:text-[#4A7C6F]">
                    {service.title}
                  </h3>

                  <p className="text-[#8B7E6A] leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#4A7C6F] transition-all group-hover:gap-3">
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10m0 0L9 4m4 4L9 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
