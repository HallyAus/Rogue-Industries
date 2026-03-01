import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "About Keon Wu",
  description:
    "Meet Keon Wu — a country pianist, songwriter, and piano teacher based in Ourimbah on the Central Coast of NSW. Learn about his journey, teaching philosophy, and passion for music.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FFFBF5] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#4A7C6F]/[0.04] blur-3xl" />
        <div className="mx-auto max-w-4xl text-center relative">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#4A7C6F]">
              About
            </span>
            <h1 className="mt-3 font-serif text-4xl font-bold text-[#2C2418] sm:text-5xl lg:text-6xl">
              The Story Behind the Music
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#8B7E6A] leading-relaxed">
              Every musician has a story. Here&apos;s mine.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <Section dark>
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <ScrollReveal direction="left">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-[#4A7C6F]/10 to-[#D4943A]/10 border border-[#E8DFD0]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-[#4A7C6F]/10">
                    <svg viewBox="0 0 24 24" className="h-16 w-16 text-[#4A7C6F]" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M9 18V5l12-2v13" />
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="18" cy="16" r="3" />
                    </svg>
                  </div>
                  <p className="text-sm text-[#A89F91]">Photo of Keon coming soon</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-6 text-[#8B7E6A] leading-relaxed">
              <h2 className="font-serif text-3xl font-bold text-[#2C2418]">
                G&apos;day, I&apos;m Keon
              </h2>
              <p>
                I grew up in the country, surrounded by the sounds of nature and
                the occasional dusty old piano in the corner of the living room.
                That piano became my best mate. While other kids were out riding
                bikes, I was working out melodies and figuring out chords by ear.
              </p>
              <p>
                Music and faith have always walked hand in hand for me. There&apos;s
                something about sitting at the keys that feels like a
                conversation — with God, with yourself, with something bigger
                than the notes on the page.
              </p>
              <p>
                After years of playing, performing, and writing my own music, I
                discovered that what I loved most wasn&apos;t just playing — it was
                helping others find their own voice at the piano. Watching
                someone&apos;s face light up when they play their first song? That
                never gets old.
              </p>
              <p>
                Now based in Ourimbah on the beautiful Central Coast of NSW, I
                teach students of all ages and levels. Whether you&apos;re a
                complete beginner or an experienced player wanting to push
                further, I&apos;d love to help you on your journey.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Teaching Philosophy */}
      <Section>
        <SectionHeader
          title="My Teaching Philosophy"
          subtitle="Three principles that guide every lesson"
        />
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Meet You Where You Are",
              description:
                "No judgement, no pressure. Whether you've never touched a piano or you're preparing for an exam, every lesson starts from where you are right now.",
              icon: (
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              ),
            },
            {
              title: "Music Should Be Joyful",
              description:
                "Learning an instrument should feel exciting, not like homework. I keep things fun, practical, and focused on the music YOU want to play.",
              icon: (
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              ),
            },
            {
              title: "Build Real Skills",
              description:
                "I don't just teach songs — I teach you how to understand music. Technique, theory, ear training, and creativity all woven into every lesson.",
              icon: (
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              ),
            },
          ].map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <div className="rounded-2xl border border-[#E8DFD0] bg-white p-8 text-center shadow-sm">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4A7C6F]/10 text-[#4A7C6F]">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-serif font-bold text-[#2C2418]">
                  {item.title}
                </h3>
                <p className="text-[#8B7E6A] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Social / Connect */}
      <Section dark>
        <div className="text-center">
          <ScrollReveal>
            <SectionHeader
              title="Follow the Journey"
              subtitle="Catch me on socials for behind-the-scenes, covers, and original music."
            />
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { name: "Instagram", href: SITE_CONFIG.social.instagram, handle: "@_keon_music_" },
                { name: "Facebook", href: SITE_CONFIG.social.facebook, handle: "keonwu.music" },
                { name: "YouTube", href: SITE_CONFIG.social.youtube, handle: "@KeonWu_Music" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-[#E8DFD0] bg-white px-6 py-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                >
                  <span className="font-semibold text-[#2C2418]">{social.name}</span>
                  <span className="text-sm text-[#A89F91]">{social.handle}</span>
                </a>
              ))}
            </div>
            <div className="mt-12">
              <Button href="/contact" size="lg">
                Let&apos;s Make Music Together
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
