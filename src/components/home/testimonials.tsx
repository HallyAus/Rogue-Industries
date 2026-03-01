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
            <div className="relative rounded-2xl border border-[#E8DFD0] bg-white p-8 shadow-sm">
              {/* Left accent bar */}
              <div className="absolute left-0 top-8 bottom-8 w-1 rounded-full bg-gradient-to-b from-[#4A7C6F] to-[#D4943A]" />

              {/* Quote mark */}
              <div className="mb-4 text-4xl font-serif text-[#4A7C6F]/20 leading-none select-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-[#D4943A]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-6 text-lg text-[#2C2418] leading-relaxed">
                {testimonial.quote}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4A7C6F]/10 text-sm font-bold text-[#4A7C6F]">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2C2418]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[#A89F91]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
