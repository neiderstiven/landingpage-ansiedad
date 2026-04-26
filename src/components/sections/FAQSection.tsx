import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      q: "¿Qué tan rápido actúan las técnicas?",
      a: "Muchas de las técnicas están diseñadas para dar un alivio inicial en pocos minutos. Algunas, como las técnicas de respiración, pueden sentirse incluso en los primeros 60 segundos. Los rituales nocturnos y los ejercicios de reprogramación mental requieren práctica constante para ver efectos más profundos.",
    },
    {
      q: "¿Funciona si ya probé otras opciones?",
      a: "Sí. Este kit fue creado pensando justo en personas que ya probaron meditación, apps o consejos genéricos sin los resultados esperados. Las técnicas aquí están diseñadas para el momento de tensión real, no para sesiones largas de meditación ideal.",
    },
    {
      q: "¿Es un reemplazo de la terapia?",
      a: "No. Este material es una herramienta educativa y complementaria. No reemplaza terapia, consejería, o medicación prescrita por un profesional. Si estás en tratamiento, estas técnicas pueden complementar tu proceso.",
    },
    {
      q: "¿Cómo recibo el PDF?",
      a: "Inmediatamente después del pago recibirás un correo con los enlaces de descarga del PDF principal y los 2 bonos. Puedes descargarlo en tu celular, tablet o computadora y tenerlo para siempre.",
    },
    {
      q: "¿Tiene garantía?",
      a: "Sí. Tienes 7 días de garantía total. Si las técnicas no te funcionan, te devolvemos el 100% de tu dinero. Sin preguntas. Sin complicaciones.",
    },
    {
      q: "¿Es seguro el pago?",
      a: "Totalmente. Procesamos pagos con plataformas certificadas que cifran toda la información. Aceptamos tarjetas, PayPal y, para Colombia, PSE y Nequi.",
    },
    {
      q: "¿Necesito conocimientos previos?",
      a: "No. El kit está escrito en lenguaje sencillo y empático. Cada técnica se explica paso a paso. No necesitas experiencia previa en meditación, psicología ni bienestar.",
    },
    {
      q: "¿Puedo usarlo en mi celular?",
      a: "Sí. El PDF está optimizado para leerse en celular, tablet o computadora. Muchas personas lo guardan en su celular para tenerlo siempre a mano en el momento que lo necesiten.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#F0EBE3] to-[#FAF7F2] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#5B8DB8]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#5B8DB8]">
            Preguntas frecuentes
          </span>
          <h2 className="mt-5 font-serif text-3xl font-bold text-[#2C3E50] md:text-4xl lg:text-5xl">
            ¿Tienes dudas? Te respondemos
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-slate-200 bg-white px-6 shadow-sm"
            >
              <AccordionTrigger className="py-5 text-left font-serif text-base font-semibold text-[#2C3E50] hover:no-underline md:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm text-slate-600 md:text-base">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}