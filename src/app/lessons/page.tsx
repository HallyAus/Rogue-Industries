import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Section, SectionHeader } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { PricingTable } from "@/components/lessons/pricing-table";
import { LessonsFaq } from "@/components/lessons/faq";
import { JsonLd } from "@/components/seo/json-ld";
import { FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Piano Lessons",
  description:
    "Book face-to-face piano lessons in Ourimbah, NSW or join online sessions from anywhere. All ages, all levels. Personalised instruction from Keon Wu.",
  path: "/lessons",
});

export default function LessonsPage() {
  const faqSchema = {
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd type="FAQPage" data={faqSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0C0A09] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#D97706]/5 blur-3xl" />
        <div className="mx-auto max-w-4xl text-center relative">
          <ScrollReveal>
            <span className="text-sm font-medium uppercase tracking-widest text-[#D97706]">
              Lessons
            </span>
            <h1 className="mt-3 font-serif text-4xl font-bold text-[#FAFAF9] sm:text-5xl lg:text-6xl">
              Your Piano Journey Starts Here
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#A8A29E] leading-relaxed">
              Personalised lessons designed around your goals, your pace, and the
              music you love. Available face-to-face in Ourimbah or online from
              anywhere.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Face to Face */}
      <Section id="face-to-face">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <ScrollReveal direction="left">
            <div>
              <span className="text-sm font-medium uppercase tracking-widest text-[#D97706]">
                In-Person
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-[#FAFAF9] sm:text-4xl">
                Face-to-Face Lessons
              </h2>
              <div className="mt-6 space-y-4 text-[#A8A29E] leading-relaxed">
                <p>
                  There&apos;s nothing quite like being in the same room, side by
                  side at the piano. Face-to-face lessons allow me to guide your
                  posture, hand position, and technique in real time.
                </p>
                <p>
                  My studio in Ourimbah is a relaxed, welcoming space where
                  you can focus on your music without distractions. I&apos;ve got
                  a quality grand piano, comfortable seating for parents who want
                  to wait, and a cuppa always on offer.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Location", value: "Ourimbah, NSW 2258" },
                  { label: "Ages", value: "6 years to adults" },
                  { label: "Duration", value: "30 or 60 minutes" },
                  { label: "Levels", value: "Beginner to advanced" },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg border border-[#292524] bg-[#0C0A09] p-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-[#D97706]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-[#FAFAF9]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            {/* Map embed */}
            <div className="overflow-hidden rounded-2xl border border-[#292524]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13264.841799458395!2d151.35!3d-33.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b72b7f3b02a2e1b%3A0x4017d681632b240!2sOurimbah%20NSW%202258!5e0!3m2!1sen!2sau!4v1709000000000!5m2!1sen!2sau"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dusty Tunes location - Ourimbah, NSW"
              />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Online */}
      <Section dark id="online">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <div className="rounded-2xl border border-[#292524] bg-[#1C1917] p-8">
              <h3 className="mb-6 font-serif text-xl font-bold text-[#FAFAF9]">
                How Online Lessons Work
              </h3>
              <ol className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Book Your Slot",
                    desc: "Choose a time that suits you via the contact form or email.",
                  },
                  {
                    step: "02",
                    title: "Get Set Up",
                    desc: "You'll need a piano/keyboard, a device with camera, and a stable internet connection.",
                  },
                  {
                    step: "03",
                    title: "Join the Session",
                    desc: "I'll send you a video link. We connect, and the lesson flows just like an in-person session.",
                  },
                  {
                    step: "04",
                    title: "Practice & Progress",
                    desc: "After each lesson, you'll receive notes and exercises tailored to your session.",
                  },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D97706]/10 text-sm font-bold text-[#D97706]">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-semibold text-[#FAFAF9]">{item.title}</p>
                      <p className="mt-1 text-sm text-[#A8A29E]">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="order-1 lg:order-2">
            <div>
              <span className="text-sm font-medium uppercase tracking-widest text-[#D97706]">
                Remote
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold text-[#FAFAF9] sm:text-4xl">
                Online Live Lessons
              </h2>
              <div className="mt-6 space-y-4 text-[#A8A29E] leading-relaxed">
                <p>
                  Can&apos;t make it to Ourimbah? No worries. Online lessons
                  deliver the same personalised, quality instruction from
                  wherever you are — whether that&apos;s across the Coast or
                  across the country.
                </p>
                <p>
                  I use high-quality audio and video so you can hear every
                  nuance. It&apos;s surprisingly natural — most of my online
                  students say they forget they&apos;re not in the room after the
                  first five minutes.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/contact">Book an Online Lesson</Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Pricing */}
      <Section>
        <SectionHeader
          title="Simple, Transparent Pricing"
          subtitle="No lock-in contracts. No hidden fees. Just great piano lessons."
        />
        <PricingTable />
      </Section>

      {/* FAQ */}
      <Section dark>
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Got questions? I've got answers."
        />
        <div className="mx-auto max-w-3xl">
          <LessonsFaq />
        </div>
        <div className="mt-12 text-center">
          <p className="mb-4 text-[#A8A29E]">
            Still have questions? I&apos;d love to hear from you.
          </p>
          <Button href="/contact">Get in Touch</Button>
        </div>
      </Section>
    </>
  );
}
