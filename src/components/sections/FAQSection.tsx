import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { landingData } from "@/lib/data/landing-data";

export default function FAQSection() {
  const { faqs } = landingData;

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