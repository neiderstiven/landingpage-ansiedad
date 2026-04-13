import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Zap, Clock, Star } from "lucide-react";

const HeroSection = () => {
    const scrollToCheckout = () => {
        document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0B1E]">
            {/* Background image with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                    backgroundImage:
                        "url('assets/hero-bg-anxiety.webp')",
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F0B1E]/70 via-[#0F0B1E]/50 to-[#0F0B1E]" />

            {/* Animated gradient orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/15 rounded-full blur-[150px] animate-pulse delay-1000" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">
                {/* Trust badge */}
                <div className="flex justify-center mb-6">
                    <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 px-4 py-2 text-sm font-medium rounded-full">
                        <Star className="w-4 h-4 mr-2 fill-amber-400" />
                        +2,500 descargas del kit de bienestar
                    </Badge>
                </div>

                {/* Main headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                    Técnicas prácticas para{" "}
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                        recuperar la calma en momentos reales
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg sm:text-xl md:text-2xl text-[#C4B5D4] max-w-3xl mx-auto mb-4 leading-relaxed">
                    15 métodos de bienestar que puedes usar{" "}
                    <span className="text-white font-semibold">incluso si ya probaste otras opciones</span>.
                    Guía de lectura rápida. Discretas. Para usar sin que nadie lo note.
                </p>

                <p className="text-base text-[#C4B5D4]/80 mb-8 max-w-2xl mx-auto">
                    Un sistema de bolsillo en tu celular con herramientas para gestionar el estrés del día a día. Usado por más de 2,500 personas.
                </p>

                {/* CTA Button */}
                <div className="flex flex-col items-center gap-4 mb-10">
                    <Button
                        onClick={() => window.open("https://pay.hotmart.com/C105110172F", "_blank")}
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-lg sm:text-xl font-bold px-10 sm:px-14 py-7 sm:py-8 rounded-full shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                    >
                        Descarga el Kit por $5.99 USD
                    </Button>
                    <p className="text-sm text-[#C4B5D4]/60 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        Descarga inmediata · Garantía de satisfacción · Pago seguro
                    </p>
                </div>

                {/* Feature pills */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    {[
                        { icon: <Zap className="w-4 h-4" />, text: "Técnicas discretas" },
                        { icon: <ShieldCheck className="w-4 h-4" />, text: "Respaldo práctico" },
                        { icon: <Clock className="w-4 h-4" />, text: "Acceso inmediato" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-[#C4B5D4]"
                        >
                            <span className="text-purple-400">{item.icon}</span>
                            {item.text}
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-purple-400 rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;