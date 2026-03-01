"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <Section dark>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <ScrollReveal direction="left">
          <div className="relative">
            {/* Image placeholder */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-[#4A7C6F]/10 to-[#D4943A]/10 border border-[#E8DFD0]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-[#4A7C6F]/10">
                    <svg viewBox="0 0 24 24" className="h-12 w-12 text-[#4A7C6F]" fill="none" stroke="currentColor" strokeWidth="1">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <line x1="6" y1="4" x2="6" y2="14" />
                      <line x1="10" y1="4" x2="10" y2="14" />
                      <line x1="14" y1="4" x2="14" y2="14" />
                      <line x1="18" y1="4" x2="18" y2="14" />
                    </svg>
                  </div>
                  <p className="text-sm text-[#A89F91]">Photo coming soon</p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border-2 border-[#4A7C6F]/10 -z-10" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#4A7C6F]">
              Meet Your Teacher
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-[#2C2418] sm:text-4xl lg:text-5xl">
              G&apos;day, I&apos;m Keon
            </h2>
            <div className="mt-6 space-y-4 text-[#8B7E6A] leading-relaxed">
              <p>
                Just a country boy from the Central Coast who found his calling
                at the piano. Music has always been my way of connecting — with
                faith, with people, and with the stories that matter.
              </p>
              <p>
                I believe everyone has music in them. My job isn&apos;t to create
                musicians — it&apos;s to help you discover the one that&apos;s
                already there. Whether you&apos;re 8 or 80, playing your first
                note or preparing for your next performance, I&apos;m here to
                walk that journey with you.
              </p>
              <p>
                My teaching style is patient, encouraging, and tailored to{" "}
                <em className="text-[#2C2418] not-italic font-medium">you</em>. No cookie-cutter lessons. No pressure. Just music,
                done your way.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <Button href="/about">My Full Story</Button>
              <Button href="/contact" variant="outline">
                Say G&apos;day
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
