import HeroSection from "@/components/sections/HeroSection";
import ValueProposition from "@/components/sections/ValueProposition";
import BonusSection from "@/components/sections/BonusSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import AlternativesSection from "@/components/sections/AlternativesSection";
import ScienceSection from "@/components/sections/ScienceSection";
import ProductSection from "@/components/sections/ProductSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans text-slate-700 antialiased">
      <HeroSection />
      <ValueProposition />
      <BonusSection />
      <ProblemsSection />
      <AlternativesSection />
      <ScienceSection />
      <ProductSection />
      <ComparisonSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}