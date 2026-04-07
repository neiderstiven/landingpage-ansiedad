import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Zap, Shield, Eye, FlaskConical, Wallet, BookOpen } from "lucide-react";

const features = [
    {
        icon: <Zap className="w-5 h-5" />,
        title: "Funciona en 60 segundos",
        description: "Técnicas diseñadas para calmar tu ansiedad en el momento exacto de la crisis.",
    },
    {
        icon: <Shield className="w-5 h-5" />,
        title: "Sin medicación",
        description: "100% natural. Sin efectos secundarios. Sin dependencia.",
    },
    {
        icon: <Eye className="w-5 h-5" />,
        title: "Discretas e invisibles",
        description: "Puedes usarlas en una reunión, en el metro, o en la cama. Nadie lo notará.",
    },
    {
        icon: <FlaskConical className="w-5 h-5" />,
        title: "Respaldo científico",
        description: "Basadas en neurociencia, PNL y técnicas cognitivo-conductuales probadas.",
    },
    {
        icon: <Wallet className="w-5 h-5" />,
        title: "Más barato que un café",
        description: "Una sesión de terapia cuesta $50-150. Esto cuesta menos que un café con leche.",
    },
    {
        icon: <BookOpen className="w-5 h-5" />,
        title: "Acceso inmediato",
        description: "PDF descargable al instante. Sin esperas, sin suscripciones, tuyo para siempre.",
    },
];

const comparison = [
    { yours: "15 técnicas específicas", theirs: "Consejos generales" },
    { yours: "Funciona en 60 segundos", theirs: '"Con el tiempo verás resultados"' },
    { yours: "PDF = acceso inmediato", theirs: "Cursos largos que no terminas" },
    { yours: "Lenguaje real y empático", theirs: "Jerga psicológica" },
    { yours: "Incluye kit + rituales", theirs: "Solo teoría" },
    { yours: "Pago único accesible", theirs: "Suscripciones mensuales" },
];

const ProductSection = () => {
    const scrollToCheckout = () => {
        document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="bg-[#1A1333] py-20 sm:py-28 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            <div className="absolute -top-40 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px]" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3">
                        La solución
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Presentamos{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            "Adiós Ansiedad"
                        </span>
                    </h2>
                    <p className="text-[#C4B5D4] text-lg max-w-2xl mx-auto">
                        El sistema de bolsillo con 15 técnicas científicas para calmar tu ansiedad
                        en menos de 60 segundos.
                    </p>
                </div>

                {/* Product showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Product image */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl" />
                            <img
                                src="/assets/adios-ansiedad.png"
                                alt="Adiós Ansiedad - PDF Guide"
                                className="relative rounded-2xl shadow-2xl max-w-sm w-full"
                            />
                            {/* Price badge */}
                            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl px-5 py-3 shadow-xl">
                                <p className="text-white font-extrabold text-2xl">$5.99</p>
                                <p className="text-white/80 text-xs">USD · Pago único</p>
                            </div>
                        </div>
                    </div>

                    {/* What's inside */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">
                            ¿Qué encontrarás dentro?
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "15 técnicas paso a paso para calmar la ansiedad al instante",
                                "Técnicas de respiración que funcionan en 30-60 segundos",
                                "Método de grounding para ataques de pánico",
                                "Rituales nocturnos para dormir sin pensamientos intrusivos",
                                "Técnicas discretas para usar en público sin que nadie lo note",
                                "Ejercicios de reprogramación mental basados en neurociencia",
                                "Guía de emergencia: qué hacer cuando sientes que pierdes el control",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                                    </div>
                                    <span className="text-[#C4B5D4] text-sm leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Button
                            onClick={() => window.open("https://pay.hotmart.com/C105110172F", "_blank")}
                            className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold px-8 py-6 rounded-full shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
                        >
                            Obtener Acceso Inmediato
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="bg-[#241D3D]/50 border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                            <p className="text-[#C4B5D4]/70 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Comparison table */}
                <div className="text-center mb-10">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                        ¿Por qué es diferente?
                    </h3>
                    <p className="text-[#C4B5D4]">Compara y decide por ti mismo/a</p>
                </div>

                <div className="max-w-3xl mx-auto bg-[#241D3D]/40 border border-purple-500/10 rounded-2xl overflow-hidden">
                    {/* Header */}
                    <div className="grid grid-cols-2 bg-[#241D3D]/80">
                        <div className="px-6 py-4 text-center">
                            <p className="text-purple-400 font-bold text-sm">✨ Adiós Ansiedad</p>
                        </div>
                        <div className="px-6 py-4 text-center border-l border-white/5">
                            <p className="text-[#C4B5D4]/50 font-bold text-sm">La competencia</p>
                        </div>
                    </div>
                    {/* Rows */}
                    {comparison.map((row, i) => (
                        <div key={i} className="grid grid-cols-2 border-t border-white/5">
                            <div className="px-6 py-4 flex items-center gap-2">
                                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                <span className="text-white text-sm">{row.yours}</span>
                            </div>
                            <div className="px-6 py-4 border-l border-white/5 flex items-center gap-2">
                                <span className="text-red-400 flex-shrink-0">✗</span>
                                <span className="text-[#C4B5D4]/50 text-sm">{row.theirs}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSection;