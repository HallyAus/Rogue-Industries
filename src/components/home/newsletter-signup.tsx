"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Section } from "@/components/ui/section";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to newsletter service
    setSubmitted(true);
  };

  return (
    <Section>
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-3xl border border-[#292524] bg-gradient-to-br from-[#1C1917] to-[#0C0A09] px-6 py-16 text-center sm:px-12 lg:px-20">
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#D97706]/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#92400E]/5 blur-3xl" />

          {/* Musical notes decoration */}
          <div className="absolute top-8 left-8 text-[#D97706]/10 text-6xl font-serif select-none">
            ♪
          </div>
          <div className="absolute bottom-8 right-8 text-[#D97706]/10 text-6xl font-serif select-none">
            ♫
          </div>

          <div className="relative">
            <h2 className="font-serif text-3xl font-bold text-[#FAFAF9] sm:text-4xl">
              Join the Dusty Tunes Community
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#A8A29E]">
              Get free practice tips, new sheet music releases, and behind-the-scenes
              updates delivered to your inbox. No spam, just music.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-900/30 px-6 py-3 text-green-400"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                You&apos;re in! Check your inbox.
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 rounded-lg border border-[#292524] bg-[#0C0A09] px-4 py-3 text-[#FAFAF9] placeholder-[#78716C] transition-colors focus:border-[#D97706] focus:outline-none focus:ring-1 focus:ring-[#D97706]"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-r from-[#D97706] to-[#F59E0B] px-6 py-3 font-semibold text-[#0C0A09] transition-all hover:from-[#F59E0B] hover:to-[#D97706] shadow-lg shadow-amber-900/20"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
