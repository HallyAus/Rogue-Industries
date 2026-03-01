import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { ServicesOverview } from "@/components/home/services-overview";
import { AboutPreview } from "@/components/home/about-preview";
import { Testimonials } from "@/components/home/testimonials";
import { NewsletterSignup } from "@/components/home/newsletter-signup";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesOverview />
      <AboutPreview />
      <Testimonials />
      <NewsletterSignup />
    </>
  );
}
