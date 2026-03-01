import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Blog — Piano Tips & Music Insights",
  description:
    "Piano tips, practice advice, music theory guides, and gear recommendations from Keon Wu. Practical insights to help you become a better pianist.",
  path: "/blog",
});

export default function BlogPage() {
  const featured = BLOG_POSTS.filter((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0C0A09] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#D97706]/5 blur-3xl" />
        <div className="mx-auto max-w-4xl text-center relative">
          <ScrollReveal>
            <span className="text-sm font-medium uppercase tracking-widest text-[#D97706]">
              Blog
            </span>
            <h1 className="mt-3 font-serif text-4xl font-bold text-[#FAFAF9] sm:text-5xl lg:text-6xl">
              Notes from the Piano Bench
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A8A29E] leading-relaxed">
              Tips, insights, and stories from my life in music. Whether you&apos;re
              just starting out or fine-tuning your skills, there&apos;s something here
              for you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Posts */}
      <Section>
        <SectionHeader title="Featured" />
        <div className="grid gap-8 md:grid-cols-2">
          {featured.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <article className="overflow-hidden rounded-2xl border border-[#292524] bg-[#1C1917] transition-all duration-300 hover:border-[#D97706]/30 hover:shadow-lg hover:shadow-amber-900/10 hover:-translate-y-1">
                  {/* Image placeholder */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-[#292524] to-[#1C1917] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-12 w-12 text-[#D97706]/20" fill="none" stroke="currentColor" strokeWidth="1">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>

                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-3 text-xs text-[#78716C]">
                      <span className="rounded-full border border-[#292524] px-2.5 py-0.5 text-[#D97706]">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-serif font-bold text-[#FAFAF9] group-hover:text-[#D97706] transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-[#A8A29E] leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#D97706]">
                      Read more
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8h10m0 0L9 4m4 4L9 12" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* More Posts */}
      {rest.length > 0 && (
        <Section dark>
          <SectionHeader title="More Articles" />
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <article className="flex gap-6 rounded-xl border border-[#292524] bg-[#1C1917] p-6 transition-all hover:border-[#D97706]/30 hover:-translate-y-0.5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#D97706]/10">
                      <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#D97706]" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="mb-2 flex items-center gap-3 text-xs text-[#78716C]">
                        <span className="text-[#D97706]">{post.category}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-serif font-bold text-[#FAFAF9] group-hover:text-[#D97706] transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#A8A29E] line-clamp-1">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
