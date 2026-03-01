import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/lib/constants";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return createMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}` });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-[#FFFBF5] pt-28 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-[#A89F91]">
            <Link href="/" className="hover:text-[#8B7E6A] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#8B7E6A] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#8B7E6A] truncate">{post.title}</span>
          </nav>
        </div>
      </section>

      <Section>
        <article className="mx-auto max-w-3xl">
          <ScrollReveal>
            <header className="mb-12">
              <div className="mb-4 flex items-center gap-3 text-sm text-[#A89F91]">
                <span className="rounded-full border border-[#E8DFD0] bg-[#FFFBF5] px-3 py-1 font-medium text-[#4A7C6F]">{post.category}</span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="font-serif text-3xl font-bold text-[#2C2418] sm:text-4xl lg:text-5xl leading-tight">{post.title}</h1>
              <p className="mt-6 text-xl text-[#8B7E6A] leading-relaxed">{post.excerpt}</p>
              <div className="mt-8 h-px bg-[#E8DFD0]" />
            </header>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-6 text-[#8B7E6A] leading-relaxed">
              <p>
                This is a placeholder for the full blog post content. In a
                production setup, this content would come from a CMS (like
                Sanity, Contentful, or MDX files) and be rendered with rich formatting.
              </p>
              <p>
                The blog is designed to be a content hub for SEO — targeting
                long-tail keywords related to piano lessons, practice tips, music
                theory, and gear recommendations.
              </p>
              <div className="rounded-2xl border border-[#E8DFD0] bg-[#FFFBF5] p-8 text-center">
                <p className="text-[#A89F91]">
                  Full article content will be added here. Connect a CMS or add
                  MDX files to populate blog posts with real content.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-16 rounded-2xl border border-[#E8DFD0] bg-white p-8 shadow-sm">
              <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#4A7C6F]/10 text-2xl font-bold text-[#4A7C6F]">K</div>
                <div>
                  <p className="font-serif text-lg font-bold text-[#2C2418]">Written by Keon Wu</p>
                  <p className="mt-1 text-sm text-[#8B7E6A]">Piano teacher based in Ourimbah, NSW. Passionate about helping people discover the joy of playing piano.</p>
                </div>
                <div className="shrink-0">
                  <Button href="/contact" size="sm">Book a Lesson</Button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-8">
            <Link href="/blog" className="text-sm font-medium text-[#4A7C6F] hover:underline">&larr; Back to all posts</Link>
          </div>
        </article>
      </Section>
    </>
  );
}
