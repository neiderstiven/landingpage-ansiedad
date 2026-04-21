import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { productConfig } from "@/lib/config";

const StickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sentinelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Use IntersectionObserver for better performance (not scroll events)
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Show sticky CTA when sentinel is NOT visible (user is above it, in hero area)
                // Hide when sentinel IS visible (user scrolled past hero)
                setIsVisible(!entry.isIntersecting);
            },
            { threshold: 0 }
        );

        // Create sentinel element at hero height position
        const sentinel = document.createElement("div");
        sentinel.style.cssText = "position:absolute;top:600px;height:1px;width:1px;pointer-events:none;";
        document.body.appendChild(sentinel);

        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }
        observer.observe(sentinel);

        return () => {
            observer.disconnect();
            document.body.removeChild(sentinel);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0F0B1E]/95 backdrop-blur-sm border-t border-purple-500/20 p-3 sm:hidden animate-slide-up">
            <Button
                onClick={() => window.open(productConfig.HOTMART_CHECKOUT_URL, "_blank", "noopener,noreferrer")}
                size="lg"
                aria-label="Comprar kit de bienestar Adiós Ansiedad por $5.99 USD"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-6 rounded-full shadow-lg text-base"
            >
                Descargar el Kit — $5.99
                <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
        </div>
    );
};

export default StickyCTA;
