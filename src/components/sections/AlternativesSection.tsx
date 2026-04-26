import { productConfig } from "@/lib/config";
import { X, ArrowRight } from "lucide-react";

export default function AlternativesSection() {
  const alternatives = [
    { name: "Meditación", issue: "No es fácil concentrarse en momentos de tensión" },
    { name: "Apps como Calm o Headspace", issue: "Se abandonan en 1 semana" },
    { name: "Terapia", issue: "Costosa y no siempre se encuentra buen terapeuta" },
    { name: "Medicación", issue: "Efectos secundarios y preocupación por dependencia" },
    { name: "Consejos de YouTube", issue: "Genéricos y no diseñados para el momento de tensión" },
    { name: "Tés y aceites esenciales", issue: "Efecto mínimo cuando la tensión es real" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#F0EBE3] to-[#FAF7F2] py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-[#2C3E50] md:text-4xl lg:text-5xl">
            Cuando otras opciones no dan resultado
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 md:text-lg">
            Estas opciones no están diseñadas para funcionar en el momento de tensión. No es un
            problema tuyo. Es que necesitan herramientas diferentes.
          </p>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {alternatives.map((alt, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
                <X className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-[#2C3E50]">{alt.name}</h4>
                <p className="mt-1 text-sm text-slate-500">{alt.issue}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#5B8DB8] to-[#7FB9A8] p-8 text-center text-white shadow-xl md:p-12">
          <h3 className="font-serif text-2xl font-bold md:text-3xl">
            ¿Y si existiera algo diferente?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-white/90 md:text-lg">
            Algo que actúa de forma rápida, que puedes usar en cualquier lugar, y que realmente
            ayuda cuando más lo necesitas.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
            <span
              onClick={() => window.open(productConfig.HOTMART_CHECKOUT_URL, "_blank", "noopener,noreferrer")}>Conoce la solución</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
}