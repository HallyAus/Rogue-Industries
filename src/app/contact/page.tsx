"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to form handler (Formspree, Netlify Forms, etc.)
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0C0A09] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#D97706]/5 blur-3xl" />
        <div className="mx-auto max-w-4xl text-center relative">
          <ScrollReveal>
            <span className="text-sm font-medium uppercase tracking-widest text-[#D97706]">
              Contact
            </span>
            <h1 className="mt-3 font-serif text-4xl font-bold text-[#FAFAF9] sm:text-5xl lg:text-6xl">
              Let&apos;s Talk Music
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A8A29E] leading-relaxed">
              Whether you&apos;re ready to start lessons, have a question about
              resources, or just want to say g&apos;day — I&apos;d love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div className="rounded-2xl border border-[#292524] bg-[#1C1917] p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-900/30">
                    <svg className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#FAFAF9]">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-[#A8A29E]">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="font-serif text-2xl font-bold text-[#FAFAF9]">
                    Send a Message
                  </h2>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#FAFAF9]">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full rounded-lg border border-[#292524] bg-[#0C0A09] px-4 py-3 text-[#FAFAF9] placeholder-[#78716C] transition-colors focus:border-[#D97706] focus:outline-none focus:ring-1 focus:ring-[#D97706]"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#FAFAF9]">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full rounded-lg border border-[#292524] bg-[#0C0A09] px-4 py-3 text-[#FAFAF9] placeholder-[#78716C] transition-colors focus:border-[#D97706] focus:outline-none focus:ring-1 focus:ring-[#D97706]"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-[#FAFAF9]">
                      Subject
                    </label>
                    <select
                      id="subject"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full rounded-lg border border-[#292524] bg-[#0C0A09] px-4 py-3 text-[#FAFAF9] transition-colors focus:border-[#D97706] focus:outline-none focus:ring-1 focus:ring-[#D97706]"
                    >
                      <option value="" className="text-[#78716C]">Select a topic...</option>
                      <option value="face-to-face-lessons">Face-to-Face Lessons</option>
                      <option value="online-lessons">Online Lessons</option>
                      <option value="resources">Sheet Music / Resources</option>
                      <option value="custom-request">Custom Resource Request</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#FAFAF9]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full rounded-lg border border-[#292524] bg-[#0C0A09] px-4 py-3 text-[#FAFAF9] placeholder-[#78716C] transition-colors focus:border-[#D97706] focus:outline-none focus:ring-1 focus:ring-[#D97706] resize-none"
                      placeholder="Tell me a bit about yourself and what you're looking for..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-[#D97706] to-[#F59E0B] px-6 py-4 text-lg font-semibold text-[#0C0A09] transition-all hover:from-[#F59E0B] hover:to-[#D97706] shadow-lg shadow-amber-900/20"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="space-y-6">
              {/* Location */}
              <div className="rounded-2xl border border-[#292524] bg-[#1C1917] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#D97706]/10">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#D97706]" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#FAFAF9]">Studio Location</h3>
                <p className="mt-1 text-sm text-[#A8A29E]">
                  {SITE_CONFIG.contact.location}
                </p>
                <p className="mt-1 text-xs text-[#78716C]">
                  Central Coast, NSW
                </p>
              </div>

              {/* Email */}
              <div className="rounded-2xl border border-[#292524] bg-[#1C1917] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#D97706]/10">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#D97706]" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#FAFAF9]">Email</h3>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="mt-1 block text-sm text-[#D97706] hover:underline"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>

              {/* Hours */}
              <div className="rounded-2xl border border-[#292524] bg-[#1C1917] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#D97706]/10">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#D97706]" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#FAFAF9]">Lesson Hours</h3>
                <p className="mt-1 text-sm text-[#A8A29E]">
                  {SITE_CONFIG.contact.hours}
                </p>
                <p className="mt-1 text-xs text-[#78716C]">
                  Closed Sundays and public holidays
                </p>
              </div>

              {/* Social */}
              <div className="rounded-2xl border border-[#292524] bg-[#1C1917] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#D97706]/10">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#D97706]" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#FAFAF9]">Follow Along</h3>
                <div className="mt-3 flex flex-col gap-2">
                  <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-[#A8A29E] hover:text-[#D97706] transition-colors">
                    Instagram — @_keon_music_
                  </a>
                  <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="text-sm text-[#A8A29E] hover:text-[#D97706] transition-colors">
                    Facebook — keonwu.music
                  </a>
                  <a href={SITE_CONFIG.social.youtube} target="_blank" rel="noopener noreferrer" className="text-sm text-[#A8A29E] hover:text-[#D97706] transition-colors">
                    YouTube — @KeonWu_Music
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Map */}
      <Section dark>
        <SectionHeader
          title="Find the Studio"
          subtitle="Located in the heart of Ourimbah, Central Coast NSW"
        />
        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl border border-[#292524]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13264.841799458395!2d151.35!3d-33.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b72b7f3b02a2e1b%3A0x4017d681632b240!2sOurimbah%20NSW%202258!5e0!3m2!1sen!2sau!4v1709000000000!5m2!1sen!2sau"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dusty Tunes studio location - Ourimbah, NSW"
            />
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
