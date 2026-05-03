import { Suspense, lazy } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ValueProposition from "@/components/sections/ValueProposition";
import BonusSection from "@/components/sections/BonusSection";
import ProblemsSection from "@/components/sections/ProblemsSection";

// Lazy loaded sections
const AlternativesSection = lazy(() => import("@/components/sections/AlternativesSection"));
const ScienceSection = lazy(() => import("@/components/sections/ScienceSection"));
const ProductSection = lazy(() => import("@/components/sections/ProductSection"));
const ComparisonSection = lazy(() => import("@/components/sections/ComparisonSection"));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));
const FinalCTA = lazy(() => import("@/components/sections/FinalCTA"));
const Footer = lazy(() => import("@/components/sections/Footer"));

export default function Index() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans text-slate-700 antialiased">
      <HeroSection />
      <ValueProposition />
      <BonusSection />
      <ProblemsSection />
      <Suspense fallback={<div className="h-20" />}>
        <AlternativesSection />
        <ScienceSection />
        <ProductSection />
        <ComparisonSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
        <Footer />
      </Suspense>
    </div>
  );
}