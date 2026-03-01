"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <Section>
      <SectionHeader
        title="What My Students Say"
        subtitle="Real feedback from real students — because your experience matters most."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((testimonial, index) => (
          <ScrollReveal
            key={testimonial.name}
            delay={index * 0.1}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <div className="relative rounded-2xl border border-[#292524] bg-[#0C0A09] p-8">
              {/* Quote mark */}
              <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#D97706] to-[#F59E0B]">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#0C0A09]" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-6 text-lg text-[#FAFAF9] leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D97706]/20 text-sm font-bold text-[#D97706]">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#FAFAF9]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#A8A29E]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
