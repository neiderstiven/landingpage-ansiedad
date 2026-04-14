import { Star, Quote, Users, TrendingUp, Globe } from "lucide-react";

const testimonials = [
    {
        name: "María G.",
        role: "Profesional, 34 años",
        text: "Usé la técnica de respiración en medio de una reunión difícil y pude terminarla con calma. La llevo siempre en el celular por si la necesito.",
        stars: 5,
    },
    {
        name: "Carlos R.",
        role: "Emprendedor, 29 años",
        text: "Probé varias apps antes. Este material es diferente porque se usa en el momento justo. La técnica de grounding la aplico antes de reuniones con inversores.",
        stars: 5,
    },
    {
        name: "Ana L.",
        role: "Madre y profesional, 41 años",
        text: "Los rituales nocturnos del bono fueron lo que más necesitaba. El de 'descarga mental por escrito' me ayuda a vaciar la cabeza antes de dormir.",
        stars: 5,
    },
    {
        name: "Diego M.",
        role: "Estudiante, 23 años",
        text: "La técnica 5-4-3-2-1 de grounding la usé antes de un examen final. Me tomó menos de un minuto y pude concentrarme. Simple y concreta.",
        stars: 5,
    },
    {
        name: "Laura P.",
        role: "Freelancer, 37 años",
        text: "Las técnicas de manos discretas las uso en el transporte público y en videollamadas. Nadie nota que estás haciendo algo, pero el efecto se siente rápido.",
        stars: 5,
    },
    {
        name: "Roberto S.",
        role: "Gerente, 45 años",
        text: "Me dio herramientas prácticas para el día a día. Lo uso como referencia rápida entre reuniones. La técnica del interruptor es mi favorita.",
        stars: 5,
    },
];

const stats = [
    { icon: <Users className="w-6 h-6" />, value: "2,500+", label: "Descargas del kit" },
    { icon: <Star className="w-6 h-6" />, value: "4.9/5", label: "Calificación promedio" },
    { icon: <Globe className="w-6 h-6" />, value: "15+", label: "Países" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "7", label: "Días de garantía" },
];

const TestimonialSection = () => {
    return (
        <section className="bg-[#1A1333] py-20 sm:py-28 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3">
                        Testimonios reales
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Lo que dicen quienes ya lo{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            probaron
                        </span>
                    </h2>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-[#241D3D]/50 border border-purple-500/10 rounded-2xl p-5 text-center"
                        >
                            <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mx-auto mb-3">
                                {stat.icon}
                            </div>
                            <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                            <p className="text-[#C4B5D4]/60 text-xs mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Testimonial image */}
                <div className="flex justify-center mb-14">
                    <div className="relative max-w-lg w-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl" />
                        <img
                            src="/assets/testimonial-happy-user.webp"
                            alt="Persona en paz después de usar Adiós Ansiedad - Testimonio de usuario satisfecho"
                            width={500}
                            height={400}
                            loading="lazy"
                            className="relative rounded-2xl shadow-2xl w-full"
                        />
                    </div>
                </div>

                {/* Testimonial cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-[#241D3D]/50 border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/25 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                        >
                            <Quote className="w-8 h-8 text-purple-500/30 mb-3" />
                            <p className="text-[#C4B5D4]/90 text-sm leading-relaxed flex-1 mb-4">
                                "{t.text}"
                            </p>
                            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">{t.name}</p>
                                    <p className="text-[#C4B5D4]/50 text-xs">{t.role}</p>
                                </div>
                                <div className="ml-auto flex gap-0.5">
                                    {Array.from({ length: t.stars }).map((_, j) => (
                                        <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;