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
    setSubmitted(true);
  };

  return (
    <Section dark>
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4A7C6F] to-[#3A6357] px-6 py-16 text-center sm:px-12 lg:px-20">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#D4943A]/10 blur-3xl" />

          {/* Musical notes */}
          <div className="absolute top-8 left-8 text-white/10 text-6xl font-serif select-none">
            ♪
          </div>
          <div className="absolute bottom-8 right-8 text-white/10 text-6xl font-serif select-none">
            ♫
          </div>

          <div className="relative">
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
              Join the Dusty Tunes Community
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Get free practice tips, new sheet music releases, and behind-the-scenes
              updates delivered to your inbox. No spam, just music.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-white"
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
                  className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 transition-colors focus:border-white/40 focus:bg-white/15 focus:outline-none backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-white px-6 py-3 font-semibold text-[#4A7C6F] transition-all hover:bg-[#FFFBF5] shadow-lg shadow-black/10"
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
