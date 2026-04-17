import FloatingButtons from "@/components/FloatingButtons";
import { Toaster } from "@/components/ui/sonner";
import { Suspense, lazy, useEffect } from "react";

// Lazy-load all sections for performance
const HeroSection = lazy(() => import("@/pages/HeroSection"));
const ServicesSection = lazy(() => import("@/pages/ServicesSection"));
const PortfolioSection = lazy(() => import("@/pages/PortfolioSection"));
const WhyChooseUsSection = lazy(() => import("@/pages/WhyChooseUsSection"));
const TestimonialsSection = lazy(() => import("@/pages/TestimonialsSection"));
const FAQSection = lazy(() => import("@/pages/FAQSection"));
const MapContactSection = lazy(() => import("@/pages/MapContactSection"));
const FooterSection = lazy(() => import("@/pages/FooterSection"));

function SectionFallback() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "var(--color-dark-deep)" }}
    >
      <div
        className="w-12 h-12 rounded-full border-2 border-t-transparent animate-spin"
        style={{ borderColor: "#E91E63", borderTopColor: "transparent" }}
      />
    </div>
  );
}

export default function App() {
  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div
      className="relative min-h-screen"
      style={{ background: "var(--color-dark-deep)" }}
    >
      {/* Navigation hint element */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      <Suspense fallback={<SectionFallback />}>
        <main id="hero">
          <HeroSection />
        </main>

        <section id="services">
          <Suspense fallback={<SectionFallback />}>
            <ServicesSection />
          </Suspense>
        </section>

        <section id="portfolio">
          <Suspense fallback={<SectionFallback />}>
            <PortfolioSection />
          </Suspense>
        </section>

        <section id="why-choose-us">
          <Suspense fallback={<SectionFallback />}>
            <WhyChooseUsSection />
          </Suspense>
        </section>

        <section id="testimonials">
          <Suspense fallback={<SectionFallback />}>
            <TestimonialsSection />
          </Suspense>
        </section>

        <section id="faq">
          <Suspense fallback={<SectionFallback />}>
            <FAQSection />
          </Suspense>
        </section>

        <section id="contact">
          <Suspense fallback={<SectionFallback />}>
            <MapContactSection />
          </Suspense>
        </section>

        <footer id="footer">
          <Suspense fallback={<div className="h-32" />}>
            <FooterSection />
          </Suspense>
        </footer>
      </Suspense>

      {/* Floating WhatsApp + Instagram buttons */}
      <FloatingButtons />

      {/* Toast notifications */}
      <Toaster position="top-right" theme="dark" />
    </div>
  );
}
