"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { PRICING } from "@/lib/constants";

export function PricingTable() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {PRICING.map((plan, index) => (
        <ScrollReveal key={plan.name} delay={index * 0.1}>
          <div
            className={`relative overflow-hidden rounded-2xl border p-8 transition-all duration-300 ${
              plan.highlighted
                ? "border-[#4A7C6F] bg-white shadow-xl shadow-[#4A7C6F]/10 scale-[1.02]"
                : "border-[#E8DFD0] bg-white shadow-sm hover:shadow-md"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-[#4A7C6F] to-[#D4943A]" />
            )}

            {plan.highlighted && (
              <span className="mb-4 inline-block rounded-full bg-[#4A7C6F]/10 px-3 py-1 text-xs font-semibold text-[#4A7C6F]">
                Most Popular
              </span>
            )}

            <h3 className="text-xl font-serif font-bold text-[#2C2418]">
              {plan.name}
            </h3>
            <p className="mt-1 text-sm text-[#8B7E6A]">{plan.description}</p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-[#2C2418]">
                ${plan.price}
              </span>
              <span className="text-sm text-[#A89F91]">/{plan.interval}</span>
            </div>

            <ul className="mt-8 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-[#8B7E6A]">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#4A7C6F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                href="/contact"
                variant={plan.highlighted ? "primary" : "outline"}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
