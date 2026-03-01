import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RESOURCES_DATA } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Resources & Sheet Music",
  description:
    "Download sheet music, practice guides, and learning materials for piano. From beginner chord progressions to advanced arrangements. Free and premium resources by Keon Wu.",
  path: "/resources",
});

const levelColours: Record<string, string> = {
  Beginner: "bg-green-900/30 text-green-400 border-green-800/50",
  Intermediate: "bg-amber-900/30 text-amber-400 border-amber-800/50",
  Advanced: "bg-red-900/30 text-red-400 border-red-800/50",
  "All Levels": "bg-blue-900/30 text-blue-400 border-blue-800/50",
};

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0C0A09] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#D97706]/5 blur-3xl" />
        <div className="mx-auto max-w-4xl text-center relative">
          <ScrollReveal>
            <span className="text-sm font-medium uppercase tracking-widest text-[#D97706]">
              Resources
            </span>
            <h1 className="mt-3 font-serif text-4xl font-bold text-[#FAFAF9] sm:text-5xl lg:text-6xl">
              Sheet Music & Learning Materials
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A8A29E] leading-relaxed">
              Quality resources to support your piano journey. From free beginner
              guides to premium arrangements — there&apos;s something for every level.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Resources */}
      <Section>
        <SectionHeader
          title="Featured Resources"
          subtitle="Our most popular downloads and guides"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCES_DATA.filter((r) => r.featured).map((resource, index) => (
            <ScrollReveal key={resource.slug} delay={index * 0.1}>
              <Link href={`/resources/${resource.slug}`} className="group block">
                <div className="overflow-hidden rounded-2xl border border-[#292524] bg-[#1C1917] transition-all duration-300 hover:border-[#D97706]/30 hover:shadow-lg hover:shadow-amber-900/10 hover:-translate-y-1">
                  {/* Preview area */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-[#292524] to-[#1C1917] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-16 w-16 text-[#D97706]/20" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M9 18V5l12-2v13" />
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="18" cy="16" r="3" />
                    </svg>
                    {resource.price === 0 && (
                      <span className="absolute top-4 right-4 rounded-full bg-green-900/50 px-3 py-1 text-xs font-semibold text-green-400 border border-green-800/50">
                        Free
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${levelColours[resource.level]}`}>
                        {resource.level}
                      </span>
                      <span className="text-xs text-[#78716C]">{resource.category}</span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-[#FAFAF9] group-hover:text-[#D97706] transition-colors">
                      {resource.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#A8A29E] leading-relaxed line-clamp-2">
                      {resource.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-bold text-[#FAFAF9]">
                        {resource.price === 0 ? "Free" : `$${resource.price}`}
                      </span>
                      <span className="text-sm font-medium text-[#D97706] group-hover:underline">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* All Resources */}
      <Section dark>
        <SectionHeader
          title="All Resources"
          subtitle="Browse the complete collection"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {RESOURCES_DATA.filter((r) => !r.featured).map((resource, index) => (
            <ScrollReveal key={resource.slug} delay={index * 0.1}>
              <Link href={`/resources/${resource.slug}`} className="group block">
                <div className="flex gap-6 rounded-xl border border-[#292524] bg-[#1C1917] p-6 transition-all hover:border-[#D97706]/30 hover:-translate-y-0.5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#D97706]/10">
                    <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#D97706]" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${levelColours[resource.level]}`}>
                        {resource.level}
                      </span>
                      <span className="text-xs text-[#78716C]">{resource.category}</span>
                    </div>
                    <h3 className="font-serif font-bold text-[#FAFAF9] group-hover:text-[#D97706] transition-colors">
                      {resource.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#A8A29E] line-clamp-1">
                      {resource.description}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-[#FAFAF9]">
                      {resource.price === 0 ? "Free" : `$${resource.price}`}
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <ScrollReveal>
          <div className="rounded-2xl border border-[#292524] bg-gradient-to-br from-[#1C1917] to-[#0C0A09] p-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-[#FAFAF9]">
              Want Custom Resources?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#A8A29E]">
              Need a specific arrangement or a tailored practice guide? Get in
              touch and I&apos;ll create something just for you.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#D97706] to-[#F59E0B] px-8 py-4 text-lg font-semibold text-[#0C0A09] transition-all hover:from-[#F59E0B] hover:to-[#D97706] shadow-lg shadow-amber-900/20"
              >
                Request Custom Resources
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
