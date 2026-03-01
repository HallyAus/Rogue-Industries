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
                ? "border-[#D97706] bg-gradient-to-b from-[#D97706]/10 to-[#1C1917] shadow-xl shadow-amber-900/20 scale-[1.02]"
                : "border-[#292524] bg-[#1C1917] hover:border-[#292524]/80"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-[#D97706] to-[#F59E0B]" />
            )}

            {plan.highlighted && (
              <span className="mb-4 inline-block rounded-full bg-[#D97706]/20 px-3 py-1 text-xs font-semibold text-[#D97706]">
                Most Popular
              </span>
            )}

            <h3 className="text-xl font-serif font-bold text-[#FAFAF9]">
              {plan.name}
            </h3>
            <p className="mt-1 text-sm text-[#A8A29E]">{plan.description}</p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-[#FAFAF9]">
                ${plan.price}
              </span>
              <span className="text-sm text-[#A8A29E]">/{plan.interval}</span>
            </div>

            <ul className="mt-8 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-[#A8A29E]">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
