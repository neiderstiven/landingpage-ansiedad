import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "¿Realmente funciona en 60 segundos?",
        answer:
            "Sí. Las técnicas están diseñadas específicamente para actuar rápido. Algunas funcionan en 30 segundos, otras en 60. No son meditaciones largas ni ejercicios complicados. Son herramientas de emergencia que puedes usar en el momento exacto que la ansiedad te golpea.",
    },
    {
        question: "¿Funciona si ya probé de todo?",
        answer:
            "Especialmente si ya probaste de todo. La mayoría de soluciones (meditación, apps, tés) no están diseñadas para funcionar en momentos de crisis. Estas 15 técnicas sí lo están. Son diferentes porque atacan la ansiedad en el momento, no como prevención a largo plazo.",
    },
    {
        question: "¿Es un reemplazo de la terapia?",
        answer:
            "No. Este PDF es un complemento práctico. Tu terapeuta te ayuda a entender POR QUÉ tienes ansiedad. Este PDF te enseña QUÉ HACER cuando la ansiedad te ataca AHORA MISMO. Muchos terapeutas recomiendan este tipo de herramientas a sus pacientes.",
    },
    {
        question: "¿Cómo recibo el PDF?",
        answer:
            "Inmediatamente después de tu compra, recibirás un enlace de descarga por email. También podrás descargarlo directamente desde la página de confirmación. Es tuyo para siempre, sin suscripciones ni pagos recurrentes.",
    },
    {
        question: "¿Tiene garantía?",
        answer:
            "Sí. Tienes una garantía de satisfacción de 7 días. Si las técnicas no te funcionan, te devolvemos tu dinero. Sin preguntas. Sin complicaciones. El riesgo es cero.",
    },
    {
        question: "¿Es seguro el pago?",
        answer:
            "Completamente. Procesamos los pagos a través de plataformas seguras con encriptación SSL. Aceptamos tarjetas de crédito/débito, PayPal y otros métodos de pago locales según tu país.",
    },
    {
        question: "¿Necesito conocimientos previos?",
        answer:
            "No. Las técnicas están explicadas en lenguaje simple, paso a paso, sin jerga psicológica. Cualquier persona puede entenderlas y aplicarlas inmediatamente, sin importar su edad o experiencia previa.",
    },
    {
        question: "¿Puedo usarlo en mi celular?",
        answer:
            "Sí. El PDF está optimizado para verse bien en cualquier dispositivo: celular, tablet o computadora. Muchas personas lo guardan en su celular para tenerlo siempre a mano como su 'botón de emergencia'.",
    },
];

const FAQSection = () => {
    return (
        <section className="bg-[#0F0B1E] py-20 sm:py-28 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3">
                        Preguntas frecuentes
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                        ¿Tienes dudas?{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Te respondemos
                        </span>
                    </h2>
                </div>

                {/* Accordion */}
                <Accordion type="single" collapsible className="space-y-3">
                    {faqs.map((faq, i) => (
                        <AccordionItem
                            key={i}
                            value={`faq-${i}`}
                            className="bg-[#241D3D]/50 border border-purple-500/10 rounded-2xl px-6 data-[state=open]:border-purple-500/30 transition-colors"
                        >
                            <AccordionTrigger className="text-white font-semibold text-left hover:no-underline py-5 text-sm sm:text-base">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-[#C4B5D4]/80 text-sm leading-relaxed pb-5">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQSection;