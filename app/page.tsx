import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Coverage from "@/components/Coverage";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <HowItWorks />

        <Pricing />

        <Coverage />

        <Testimonials />

        <FAQ />

        <CTA />
      </main>

      <Footer />

      {/* Mobile sticky WhatsApp CTA */}
      <StickyWhatsApp />

      {/* Bottom padding for mobile sticky CTA */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  );
}
