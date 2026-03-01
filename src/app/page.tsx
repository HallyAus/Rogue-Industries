import { Hero } from "@/components/home/hero";
import { ServicesOverview } from "@/components/home/services-overview";
import { AboutPreview } from "@/components/home/about-preview";
import { Testimonials } from "@/components/home/testimonials";
import { NewsletterSignup } from "@/components/home/newsletter-signup";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutPreview />
      <Testimonials />
      <NewsletterSignup />
    </>
  );
}
