import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/lib/constants";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-[#0C0A09] pt-28 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-[#78716C]">
            <Link href="/" className="hover:text-[#A8A29E] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#A8A29E] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#A8A29E] truncate">{post.title}</span>
          </nav>
        </div>
      </section>

      <Section>
        <article className="mx-auto max-w-3xl">
          <ScrollReveal>
            <header className="mb-12">
              <div className="mb-4 flex items-center gap-3 text-sm text-[#78716C]">
                <span className="rounded-full border border-[#292524] px-3 py-1 text-[#D97706]">
                  {post.category}
                </span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="font-serif text-3xl font-bold text-[#FAFAF9] sm:text-4xl lg:text-5xl leading-tight">
                {post.title}
              </h1>
              <p className="mt-6 text-xl text-[#A8A29E] leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-8 h-px bg-[#292524]" />
            </header>
          </ScrollReveal>

          {/* Placeholder content */}
          <ScrollReveal>
            <div className="prose-custom space-y-6 text-[#A8A29E] leading-relaxed">
              <p>
                This is a placeholder for the full blog post content. In a
                production setup, this content would come from a CMS (like
                Sanity, Contentful, or MDX files) and be rendered with rich
                formatting.
              </p>
              <p>
                The blog is designed to be a content hub for SEO — targeting
                long-tail keywords related to piano lessons, practice tips, music
                theory, and gear recommendations. Each post helps drive organic
                traffic and establishes Keon as an authority in piano education.
              </p>
              <div className="rounded-xl border border-[#292524] bg-[#1C1917] p-8 text-center">
                <p className="text-[#78716C]">
                  Full article content will be added here. Connect a CMS or add
                  MDX files to populate blog posts with real content.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Author / CTA */}
          <ScrollReveal>
            <div className="mt-16 rounded-2xl border border-[#292524] bg-[#1C1917] p-8">
              <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#D97706]/20 text-2xl font-bold text-[#D97706]">
                  K
                </div>
                <div>
                  <p className="font-serif text-lg font-bold text-[#FAFAF9]">
                    Written by Keon Wu
                  </p>
                  <p className="mt-1 text-sm text-[#A8A29E]">
                    Piano teacher based in Ourimbah, NSW. Passionate about
                    helping people discover the joy of playing piano.
                  </p>
                </div>
                <div className="shrink-0">
                  <Button href="/contact" size="sm">
                    Book a Lesson
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Back link */}
          <div className="mt-8">
            <Link
              href="/blog"
              className="text-sm text-[#D97706] hover:underline"
            >
              ← Back to all posts
            </Link>
          </div>
        </article>
      </Section>
    </>
  );
}
