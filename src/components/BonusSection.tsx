import { Button } from "@/components/ui/button";
import { Gift, FileText, Moon, ListChecks, Smartphone, ArrowRight } from "lucide-react";

const bonuses = [
    {
        icon: <FileText className="w-7 h-7" />,
        title: "Kit de Emergencia Anti-Ansiedad",
        description:
            "Hoja de 1 página 12 tarjetas recortables para el entorno real que te ayudarán a calmar la ansiedad en el momento.",
        value: "$7",
    },
    {
        icon: <Moon className="w-7 h-7" />,
        title: "Guía de Rituales de Sueño Profundo",
        description:
            "5 rituales nocturnos para apagar tu mente y dormir como no has dormido en meses. Sin pastillas.",
        value: "$9",
    },
];

const BonusSection = () => {
    const scrollToCheckout = () => {
        document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="bg-[#0F0B1E] py-20 sm:py-28 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-[150px]" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-2 mb-6">
                        <Gift className="w-5 h-5 text-amber-400" />
                        <span className="text-amber-400 font-semibold text-sm">BONOS INCLUIDOS GRATIS</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Pero eso no es todo...
                    </h2>
                    <p className="text-[#C4B5D4] text-lg max-w-2xl mx-auto">
                        Al comprar hoy, recibes estos 2 bonos exclusivos{" "}
                        <span className="text-amber-400 font-semibold">completamente gratis</span>.
                    </p>
                </div>

                {/* Bonus image */}
                <div className="flex justify-center mb-14">
                    <div className="relative max-w-md w-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-2xl blur-xl" />
                        <img
                            src="/landingpage-ansiedad/assets/094225f9-287e-4d50-8b28-c5c8050bfa5c.png"
                            alt="Kit de bonos incluidos"
                            className="relative rounded-2xl shadow-2xl w-full"
                        />
                    </div>
                </div>

                {/* Bonus cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
                    {bonuses.map((bonus, i) => (
                        <div
                            key={i}
                            className="bg-[#241D3D]/50 border border-amber-500/10 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                                    {bonus.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-white font-bold">{bonus.title}</h3>
                                        <span className="text-xs text-amber-400/60 line-through">Valor: {bonus.value}</span>
                                    </div>
                                    <p className="text-[#C4B5D4]/70 text-sm leading-relaxed">{bonus.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Total value */}
                <div className="text-center mb-10">
                    <div className="inline-block bg-gradient-to-r from-[#241D3D] to-[#1A1333] border border-purple-500/20 rounded-2xl px-8 sm:px-12 py-8">
                        <p className="text-[#C4B5D4] text-sm mb-2">Valor total del paquete</p>
                        <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                            <span className="line-through text-red-400/60 text-2xl mr-3">$26 USD</span>
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                $5.99 USD
                            </span>
                        </p>
                        <p className="text-amber-400 font-semibold text-sm mt-2">
                            ¡Ahorra más del 76.96% solo por hoy!
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <Button
                        onClick={() => window.open("https://pay.hotmart.com/C105110172F", "_blank")}
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-lg font-bold px-12 py-7 rounded-full shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
                    >
                        Quiero Todo por $5.99
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default BonusSection;