import { Check, X, Sparkles } from "lucide-react";

export default function ComparisonSection() {
  const rows = [
    { ours: "15 técnicas específicas", theirs: "Consejos generales" },
    { ours: "Acción rápida", theirs: '"Con el tiempo verás resultados"' },
    { ours: "PDF = acceso inmediato", theirs: "Cursos largos que no terminas" },
    { ours: "Lenguaje real y empático", theirs: "Jerga psicológica" },
    { ours: "Incluye kit + rituales", theirs: "Solo teoría" },
    { ours: "Pago único accesible", theirs: "Suscripciones mensuales" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#FAF7F2] to-[#F0EBE3] py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-[#2C3E50] md:text-4xl lg:text-5xl">
            ¿Por qué es diferente?
          </h2>
          <p className="mt-4 text-slate-600 md:text-lg">Compara y decide por ti mismo/a</p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="grid grid-cols-2 divide-x divide-slate-200">
            <div className="bg-gradient-to-br from-[#5B8DB8] to-[#7FB9A8] p-5 text-center text-white md:p-6">
              <Sparkles className="mx-auto h-6 w-6" />
              <h3 className="mt-2 font-serif text-lg font-bold md:text-xl">Adiós Ansiedad</h3>
            </div>
            <div className="bg-slate-100 p-5 text-center text-slate-500 md:p-6">
              <X className="mx-auto h-6 w-6" />
              <h3 className="mt-2 font-serif text-lg font-bold md:text-xl">La competencia</h3>
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 divide-x divide-slate-200 ${i % 2 === 0 ? "bg-white" : "bg-[#FAF7F2]"}`}
            >
              <div className="flex items-start gap-3 p-5 md:p-6">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7FB9A8] text-white">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-[#2C3E50] md:text-base">{row.ours}</span>
              </div>
              <div className="flex items-start gap-3 p-5 md:p-6">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
                  <X className="h-4 w-4" />
                </span>
                <span className="text-sm text-slate-500 md:text-base">{row.theirs}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}