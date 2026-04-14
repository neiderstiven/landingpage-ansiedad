import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import ProductSection from "@/components/ProductSection";
import BonusSection from "@/components/BonusSection";
import TestimonialSection from "@/components/TestimonialSection";
import BiblicalPromises from "@/components/BiblicalPromises";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
    return (
        <div className="min-h-screen bg-[#0F0B1E]">
            <HeroSection />
            <PainSection />
            <ProductSection />
            <BonusSection />
            <TestimonialSection />
            <BiblicalPromises />
            <FAQSection />
            <FooterCTA />
            <StickyCTA />
        </div>
    );
};

export default Index;