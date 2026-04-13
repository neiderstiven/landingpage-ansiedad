import { Button } from "@/components/ui/button";
import { ShieldCheck, Clock, CreditCard, ArrowRight, Heart } from "lucide-react";

const FooterCTA = () => {
    return (
        <>
            {/* Final CTA Section */}
            <section
                id="checkout"
                className="bg-gradient-to-b from-[#1A1333] to-[#0F0B1E] py-20 sm:py-28 relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[200px]" />

                <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center">
                    {/* Urgency */}
                    <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-5 py-2 mb-8">
                        <Clock className="w-4 h-4 text-red-400" />
                        <span className="text-red-400 font-semibold text-sm">
                            Precio de lanzamiento por tiempo limitado
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                        Recupera momentos de calma.
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            La calma está a un clic.
                        </span>
                    </h2>

                    <p className="text-[#C4B5D4] text-lg max-w-xl mx-auto mb-10">
                        Un kit práctico de bienestar para usar cuando lo necesites. Descarga inmediata.
                    </p>

                    {/* Price card */}
                    <div className="bg-[#241D3D]/60 border border-purple-500/20 rounded-3xl p-8 sm:p-10 max-w-md mx-auto mb-10">
                        <p className="text-[#C4B5D4]/60 text-sm mb-1">Paquete completo</p>
                        <p className="text-[#C4B5D4]/40 text-sm line-through mb-1">$26 USD</p>
                        <p className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                            $5.99
                        </p>
                        <p className="text-[#C4B5D4]/60 text-sm mb-6">USD · Pago único · Acceso de por vida</p>

                        <ul className="text-left space-y-3 mb-8">
                            {[
                                "PDF Adiós Ansiedad — 15 técnicas",
                                "Kit de Emergencia Anti-Ansiedad",
                                "Guía de Rituales de Sueño Profundo",
                                "Garantía de satisfacción 7 días",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm">
                                    <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-emerald-400 text-xs">✓</span>
                                    </div>
                                    <span className="text-[#C4B5D4]">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button
                            size="lg"
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-lg font-bold py-7 rounded-full shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.02]"
                            onClick={() => window.open("https://pay.hotmart.com/C105110172F", "_blank")}
                        >
                            Descargar el Kit — $5.99 USD
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>

                        <div className="flex items-center justify-center gap-4 mt-5 text-xs text-[#C4B5D4]/40">
                            <span className="flex items-center gap-1">
                                <ShieldCheck className="w-3.5 h-3.5" /> Pago seguro
                            </span>
                            <span className="flex items-center gap-1">
                                <CreditCard className="w-3.5 h-3.5" /> Tarjeta / PayPal
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" /> Acceso inmediato
                            </span>
                        </div>
                    </div>

                    {/* Guarantee */}
                    <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6 max-w-md mx-auto">
                        <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                        <h3 className="text-white font-bold text-lg mb-2">Garantía de Satisfacción 7 Días</h3>
                        <p className="text-[#C4B5D4]/70 text-sm leading-relaxed">
                            Si las técnicas no te funcionan, te devolvemos el 100% de tu dinero. Sin preguntas.
                            Sin complicaciones. El riesgo es completamente nuestro.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#0F0B1E] border-t border-white/5 py-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
                    <p className="text-[#C4B5D4]/40 text-sm mb-4">
                        Hecho con{" "}
                        <Heart className="w-3.5 h-3.5 inline text-pink-400 fill-pink-400" /> para quienes
                        buscan herramientas prácticas para gestionar el estrés.
                    </p>
                    <p className="text-[#C4B5D4]/30 text-xs mb-2">
                        © {new Date().getFullYear()} Adiós Ansiedad. Todos los derechos reservados.
                    </p>
                    <p className="text-[#C4B5D4]/20 text-xs max-w-lg mx-auto mb-4">
                        Aviso: Este producto es un recurso educativo y no reemplaza el consejo médico profesional.
                        Si experimentas síntomas severos, consulta a un profesional de salud mental.
                    </p>
                    <div className="bg-[#241D3D]/40 border border-white/10 rounded-xl p-4 max-w-2xl mx-auto">
                        <p className="text-[#C4B5D4]/40 text-xs leading-relaxed">
                            <strong className="text-[#C4B5D4]/60">Disclaimer:</strong> Este producto es una guía educativa de bienestar. 
                            No sustituye consejo médico, psicológico o psiquiátrico profesional. No diagnostica ni trata condiciones de salud. 
                            Los resultados pueden variar de persona a persona. Si estás experimentando una crisis de salud mental, 
                            busca ayuda profesional inmediatamente.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterCTA;