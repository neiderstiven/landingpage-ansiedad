import { Heart, Brain, Moon, AlertTriangle, X, Frown } from "lucide-react";

const painPoints = [
    {
        icon: <Heart className="w-6 h-6" />,
        title: "Opresión en el pecho",
        description: "Esa sensación constante de que algo aprieta y no deja respirar bien.",
    },
    {
        icon: <Brain className="w-6 h-6" />,
        title: "Mentes que no se apagan",
        description: "Pensamientos acelerados difíciles de controlar, especialmente de noche.",
    },
    {
        icon: <Moon className="w-6 h-6" />,
        title: "Noches en las que el sueño no llega",
        description: "Despertarse a las 3AM con preocupaciones ocupando la mente.",
    },
    {
        icon: <AlertTriangle className="w-6 h-6" />,
        title: "Alerta constante",
        description: "La sensación de que algo malo está a punto de pasar, sin poder identificar qué.",
    },
    {
        icon: <Frown className="w-6 h-6" />,
        title: "Difícil de explicar",
        description: "La sensación de que esto es difícil de compartir con quienes no lo han experimentado.",
    },
    {
        icon: <AlertTriangle className="w-6 h-6" />,
        title: "Momentos intensos en público",
        description: "Tensión intensa en situaciones sociales que genera el impulso de salir corriendo.",
    },
];

const failedSolutions = [
    { name: "Meditación", reason: "No es fácil concentrarse en momentos de tensión" },
    { name: "Apps como Calm o Headspace", reason: "Se abandonan en 1 semana" },
    { name: "Terapia", reason: "Costosa y no siempre se encuentra buen terapeuta" },
    { name: "Medicación", reason: "Efectos secundarios y preocupación por dependencia" },
    { name: "Consejos de YouTube", reason: "Genéricos y no diseñados para el momento de tensión" },
    { name: "Tés y aceites esenciales", reason: "Efecto mínimo cuando la tensión es real" },
];

const PainSection = () => {
    return (
        <section className="bg-[#0F0B1E] py-20 sm:py-28 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                {/* Pain Points */}
                <div className="text-center mb-16">
                    <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3">
                        ¿Te identificas con esto?
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Lo que sentimos{" "}
                        <span className="text-red-400">en momentos de tensión</span>
                    </h2>
                    <p className="text-[#C4B5D4] text-lg max-w-2xl mx-auto">
                        Estos momentos son más comunes de lo que parecen. Y hay herramientas concretas para gestionarlos.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
                    {painPoints.map((point, i) => (
                        <div
                            key={i}
                            className="bg-[#241D3D]/60 border border-red-500/10 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400 mb-4 group-hover:bg-red-500/20 transition-colors">
                                {point.icon}
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">{point.title}</h3>
                            <p className="text-[#C4B5D4]/80 text-sm leading-relaxed">{point.description}</p>
                        </div>
                    ))}
                </div>

                {/* Failed Solutions */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                        Cuando otras opciones{" "}
                        <span className="text-red-400">no dan resultado</span>
                    </h2>
                    <p className="text-[#C4B5D4] text-lg max-w-2xl mx-auto">
                        No es tu culpa. Estas opciones no están diseñadas para funcionar en el momento de tensión.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-3 mb-12">
                    {failedSolutions.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-4 bg-[#241D3D]/40 border border-white/5 rounded-xl p-4 hover:bg-[#241D3D]/60 transition-colors"
                        >
                            <div className="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <X className="w-4 h-4 text-red-400" />
                            </div>
                            <div>
                                <span className="text-white font-semibold">{item.name}</span>
                                <span className="text-[#C4B5D4]/70"> — {item.reason}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Transition */}
                <div className="text-center">
                    <div className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/20 rounded-2xl px-8 py-6">
                        <p className="text-xl sm:text-2xl font-bold text-white mb-2">
                            ¿Y si existiera algo diferente?
                        </p>
                        <p className="text-[#C4B5D4]">
                            Algo que actúa <span className="text-purple-400 font-semibold">de forma rápida</span>,
                            que puedes usar <span className="text-purple-400 font-semibold">en cualquier lugar</span>,
                            y que <span className="text-purple-400 font-semibold">realmente ayuda</span> cuando más lo necesitas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PainSection;