"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#FFFBF5] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#4A7C6F]/[0.04] blur-3xl" />
        <div className="mx-auto max-w-4xl text-center relative">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#4A7C6F]">Contact</span>
            <h1 className="mt-3 font-serif text-4xl font-bold text-[#2C2418] sm:text-5xl lg:text-6xl">
              Let&apos;s Talk Music
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#8B7E6A] leading-relaxed">
              Whether you&apos;re ready to start lessons, have a question about
              resources, or just want to say g&apos;day — I&apos;d love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Section dark>
        <div className="grid gap-12 lg:grid-cols-5">
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div className="rounded-2xl border border-[#E8DFD0] bg-white p-8 shadow-sm">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                    <svg className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#2C2418]">Message Sent!</h3>
                  <p className="mt-2 text-[#8B7E6A]">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="font-serif text-2xl font-bold text-[#2C2418]">Send a Message</h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#2C2418]">Name</label>
                      <input id="name" type="text" required value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full rounded-xl border border-[#E8DFD0] bg-[#FFFBF5] px-4 py-3 text-[#2C2418] placeholder-[#A89F91] transition-colors focus:border-[#4A7C6F] focus:outline-none focus:ring-1 focus:ring-[#4A7C6F]"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#2C2418]">Email</label>
                      <input id="email" type="email" required value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full rounded-xl border border-[#E8DFD0] bg-[#FFFBF5] px-4 py-3 text-[#2C2418] placeholder-[#A89F91] transition-colors focus:border-[#4A7C6F] focus:outline-none focus:ring-1 focus:ring-[#4A7C6F]"
                        placeholder="you@email.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-[#2C2418]">Subject</label>
                    <select id="subject" required value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full rounded-xl border border-[#E8DFD0] bg-[#FFFBF5] px-4 py-3 text-[#2C2418] transition-colors focus:border-[#4A7C6F] focus:outline-none focus:ring-1 focus:ring-[#4A7C6F]">
                      <option value="" className="text-[#A89F91]">Select a topic...</option>
                      <option value="face-to-face-lessons">Face-to-Face Lessons</option>
                      <option value="online-lessons">Online Lessons</option>
                      <option value="resources">Sheet Music / Resources</option>
                      <option value="custom-request">Custom Resource Request</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#2C2418]">Message</label>
                    <textarea id="message" required rows={5} value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full rounded-xl border border-[#E8DFD0] bg-[#FFFBF5] px-4 py-3 text-[#2C2418] placeholder-[#A89F91] transition-colors focus:border-[#4A7C6F] focus:outline-none focus:ring-1 focus:ring-[#4A7C6F] resize-none"
                      placeholder="Tell me a bit about yourself and what you're looking for..." />
                  </div>
                  <button type="submit" className="w-full rounded-xl bg-[#4A7C6F] px-6 py-4 text-lg font-semibold text-white transition-all hover:bg-[#3A6357] shadow-md shadow-[#4A7C6F]/20 hover:shadow-lg">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="space-y-6">
              {[
                {
                  icon: <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#4A7C6F]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
                  title: "Studio Location",
                  content: <><p className="mt-1 text-sm text-[#8B7E6A]">{SITE_CONFIG.contact.location}</p><p className="mt-1 text-xs text-[#A89F91]">Central Coast, NSW</p></>,
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#4A7C6F]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
                  title: "Email",
                  content: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="mt-1 block text-sm text-[#4A7C6F] hover:underline">{SITE_CONFIG.contact.email}</a>,
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#4A7C6F]" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
                  title: "Lesson Hours",
                  content: <><p className="mt-1 text-sm text-[#8B7E6A]">{SITE_CONFIG.contact.hours}</p><p className="mt-1 text-xs text-[#A89F91]">Closed Sundays and public holidays</p></>,
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#4A7C6F]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>,
                  title: "Follow Along",
                  content: (
                    <div className="mt-3 flex flex-col gap-2">
                      <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8B7E6A] hover:text-[#4A7C6F] transition-colors">Instagram — @_keon_music_</a>
                      <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8B7E6A] hover:text-[#4A7C6F] transition-colors">Facebook — keonwu.music</a>
                      <a href={SITE_CONFIG.social.youtube} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8B7E6A] hover:text-[#4A7C6F] transition-colors">YouTube — @KeonWu_Music</a>
                    </div>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#E8DFD0] bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#4A7C6F]/10">{item.icon}</div>
                  <h3 className="font-semibold text-[#2C2418]">{item.title}</h3>
                  {item.content}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section>
        <SectionHeader title="Find the Studio" subtitle="Located in the heart of Ourimbah, Central Coast NSW" />
        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl border border-[#E8DFD0] shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13264.841799458395!2d151.35!3d-33.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b72b7f3b02a2e1b%3A0x4017d681632b240!2sOurimbah%20NSW%202258!5e0!3m2!1sen!2sau!4v1709000000000!5m2!1sen!2sau"
              width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Dusty Tunes studio location - Ourimbah, NSW" />
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
