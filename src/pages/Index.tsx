import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import ProductSection from "@/components/ProductSection";
import BonusSection from "@/components/BonusSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";
import BiblicalPromises from "@/components/BiblicalPromises";

const Index = () => {
    return (
        <div className="min-h-screen bg-[#0F0B1E]">
            <HeroSection />
            <PainSection />
            <ProductSection />
            <BonusSection />
            <TestimonialSection />
            <FAQSection />
            <BiblicalPromises />
            <FooterCTA />
        </div>
    );
};

export default Index;