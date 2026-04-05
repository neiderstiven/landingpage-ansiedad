import { Heart, Brain, Moon, AlertTriangle, X, Frown } from "lucide-react";

const painPoints = [
    {
        icon: <Heart className="w-6 h-6" />,
        title: "Opresión en el pecho",
        description: "Esa sensación constante de que algo te aprieta y no puedes respirar bien.",
    },
    {
        icon: <Brain className="w-6 h-6" />,
        title: "Tu mente no para",
        description: "Pensamientos acelerados que no puedes controlar, especialmente de noche.",
    },
    {
        icon: <Moon className="w-6 h-6" />,
        title: "No puedes dormir",
        description: "Te despiertas a las 3AM con el corazón acelerado y la mente llena de preocupaciones.",
    },
    {
        icon: <AlertTriangle className="w-6 h-6" />,
        title: "Miedo constante",
        description: "Sientes que algo malo va a pasar, pero no sabes qué. Vives en alerta permanente.",
    },
    {
        icon: <Frown className="w-6 h-6" />,
        title: "Vergüenza y soledad",
        description: '"Debería poder controlar esto." Te sientes solo/a porque nadie entiende lo que vives.',
    },
    {
        icon: <AlertTriangle className="w-6 h-6" />,
        title: "Miedo a los ataques",
        description: "El terror de que te dé un ataque de pánico en público. Evitas situaciones por miedo.",
    },
];

const failedSolutions = [
    { name: "Meditación", reason: "No puedes concentrarte cuando estás ansioso/a" },
    { name: "Apps como Calm o Headspace", reason: "Las abandonas en 1 semana" },
    { name: "Terapia", reason: "Cara, lenta, y no siempre encuentras buen terapeuta" },
    { name: "Medicación", reason: "Efectos secundarios y miedo a la dependencia" },
    { name: "Consejos de YouTube", reason: "Genéricos y no funcionan en el momento de crisis" },
    { name: "Tés y aceites esenciales", reason: "Efecto mínimo cuando la ansiedad es real" },
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
                        Sabemos lo que estás{" "}
                        <span className="text-red-400">sintiendo</span>
                    </h2>
                    <p className="text-[#C4B5D4] text-lg max-w-2xl mx-auto">
                        No estás loco/a. No estás exagerando. Lo que sientes es real, y hay una solución.
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
                        Ya probaste de todo...{" "}
                        <span className="text-red-400">y nada funcionó</span>
                    </h2>
                    <p className="text-[#C4B5D4] text-lg max-w-2xl mx-auto">
                        No es tu culpa. Estas soluciones no están diseñadas para funcionar en el momento de crisis.
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
                            Algo que funcione en <span className="text-purple-400 font-semibold">60 segundos</span>,
                            que puedas usar <span className="text-purple-400 font-semibold">en cualquier lugar</span>,
                            y que <span className="text-purple-400 font-semibold">realmente funcione</span> cuando más lo necesitas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PainSection;