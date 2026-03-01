import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { RESOURCES_DATA } from "@/lib/constants";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return RESOURCES_DATA.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = RESOURCES_DATA.find((r) => r.slug === slug);
  if (!resource) return {};

  return createMetadata({
    title: resource.title,
    description: resource.description,
    path: `/resources/${resource.slug}`,
  });
}

const levelColours: Record<string, string> = {
  Beginner: "bg-green-900/30 text-green-400 border-green-800/50",
  Intermediate: "bg-amber-900/30 text-amber-400 border-amber-800/50",
  Advanced: "bg-red-900/30 text-red-400 border-red-800/50",
  "All Levels": "bg-blue-900/30 text-blue-400 border-blue-800/50",
};

export default async function ResourceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resource = RESOURCES_DATA.find((r) => r.slug === slug);

  if (!resource) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-[#0C0A09] pt-28 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-[#78716C]">
            <Link href="/" className="hover:text-[#A8A29E] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-[#A8A29E] transition-colors">
              Resources
            </Link>
            <span>/</span>
            <span className="text-[#A8A29E]">{resource.title}</span>
          </nav>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Preview */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#292524] to-[#1C1917] border border-[#292524] flex items-center justify-center">
              <div className="text-center">
                <svg viewBox="0 0 24 24" className="mx-auto h-24 w-24 text-[#D97706]/20" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
                <p className="mt-4 text-sm text-[#78716C]">Preview coming soon</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Details */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="sticky top-28">
              <div className="mb-4 flex items-center gap-2">
                <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${levelColours[resource.level]}`}>
                  {resource.level}
                </span>
                <span className="text-xs text-[#78716C]">{resource.category}</span>
              </div>

              <h1 className="font-serif text-3xl font-bold text-[#FAFAF9]">
                {resource.title}
              </h1>

              <p className="mt-4 text-[#A8A29E] leading-relaxed">
                {resource.description}
              </p>

              <div className="mt-8 rounded-xl border border-[#292524] bg-[#0C0A09] p-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-bold text-[#FAFAF9]">
                    {resource.price === 0 ? "Free" : `$${resource.price} AUD`}
                  </span>
                  {resource.price === 0 && (
                    <span className="rounded-full bg-green-900/30 px-3 py-1 text-xs font-semibold text-green-400 border border-green-800/50">
                      Free Download
                    </span>
                  )}
                </div>

                <Button href="/contact" className="mt-6 w-full" size="lg">
                  {resource.price === 0 ? "Download Free" : "Purchase & Download"}
                </Button>

                <p className="mt-4 text-center text-xs text-[#78716C]">
                  {resource.price === 0
                    ? "No account needed. Instant download."
                    : "Secure payment. Instant digital delivery."}
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="/resources"
                  className="text-sm text-[#D97706] hover:underline"
                >
                  ← Back to all resources
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
