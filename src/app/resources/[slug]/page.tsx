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
  return RESOURCES_DATA.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = RESOURCES_DATA.find((r) => r.slug === slug);
  if (!resource) return {};
  return createMetadata({ title: resource.title, description: resource.description, path: `/resources/${resource.slug}` });
}

const levelColours: Record<string, string> = {
  Beginner: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Intermediate: "bg-amber-50 text-amber-700 border-amber-200",
  Advanced: "bg-rose-50 text-rose-700 border-rose-200",
  "All Levels": "bg-sky-50 text-sky-700 border-sky-200",
};

export default async function ResourceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resource = RESOURCES_DATA.find((r) => r.slug === slug);
  if (!resource) notFound();

  return (
    <>
      <section className="bg-[#FFFBF5] pt-28 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <nav className="flex items-center gap-2 text-sm text-[#A89F91]">
            <Link href="/" className="hover:text-[#8B7E6A] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-[#8B7E6A] transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-[#8B7E6A]">{resource.title}</span>
          </nav>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-[#4A7C6F]/5 to-[#D4943A]/5 border border-[#E8DFD0] flex items-center justify-center">
              <div className="text-center">
                <svg viewBox="0 0 24 24" className="mx-auto h-24 w-24 text-[#4A7C6F]/20" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
                </svg>
                <p className="mt-4 text-sm text-[#A89F91]">Preview coming soon</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="sticky top-28">
              <div className="mb-4 flex items-center gap-2">
                <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${levelColours[resource.level]}`}>{resource.level}</span>
                <span className="text-xs text-[#A89F91]">{resource.category}</span>
              </div>
              <h1 className="font-serif text-3xl font-bold text-[#2C2418]">{resource.title}</h1>
              <p className="mt-4 text-[#8B7E6A] leading-relaxed">{resource.description}</p>

              <div className="mt-8 rounded-2xl border border-[#E8DFD0] bg-white p-6 shadow-sm">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-bold text-[#2C2418]">
                    {resource.price === 0 ? "Free" : `$${resource.price} AUD`}
                  </span>
                  {resource.price === 0 && (
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                      Free Download
                    </span>
                  )}
                </div>
                <Button href="/contact" className="mt-6 w-full" size="lg">
                  {resource.price === 0 ? "Download Free" : "Purchase & Download"}
                </Button>
                <p className="mt-4 text-center text-xs text-[#A89F91]">
                  {resource.price === 0 ? "No account needed. Instant download." : "Secure payment. Instant digital delivery."}
                </p>
              </div>
              <div className="mt-6">
                <Link href="/resources" className="text-sm font-medium text-[#4A7C6F] hover:underline">&larr; Back to all resources</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
