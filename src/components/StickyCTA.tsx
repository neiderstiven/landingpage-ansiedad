import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const StickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show sticky CTA after user scrolls past hero section (~600px)
            setIsVisible(window.scrollY > 600);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0F0B1E]/95 backdrop-blur-sm border-t border-purple-500/20 p-3 sm:hidden animate-slide-up">
            <Button
                onClick={() => window.open("https://pay.hotmart.com/C105110172F", "_blank")}
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-6 rounded-full shadow-lg text-base"
            >
                Descargar el Kit — $5.99
                <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
        </div>
    );
};

export default StickyCTA;
