import { Heart } from "lucide-react";

export default function Footer() {
  const disclaimers = [
    "Este producto es un recurso educativo de bienestar, no reemplaza consejo médico, psicológico o psiquiátrico profesional.",
    "No diagnostica ni trata trastornos de ansiedad, depresión u otras condiciones de salud.",
    "Estas técnicas están diseñadas para ayudarte a gestionar el estrés del día a día, no como cura.",
    "Los resultados pueden variar significativamente de persona a persona.",
    "Si experimentas situaciones que requieren apoyo profesional, busca ayuda especializada inmediatamente.",
    "El contenido aquí presentado no constituye diagnóstico médico, consejo médico o recomendaciones de tratamiento.",
  ];

  return (
    <footer className="bg-[#2C3E50] text-white/80">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h3 className="font-serif text-lg font-bold text-white md:text-xl">
            Disclaimer Importante de Salud:
          </h3>
          <ul className="mt-4 space-y-3">
            {disclaimers.map((d, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="mt-1 shrink-0 text-[#7FB9A8]">✓</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="inline-flex items-center gap-2 text-sm">
            Hecho con <Heart className="h-4 w-4 fill-[#E8A87C] text-[#E8A87C]" /> para quienes
            buscan herramientas prácticas para gestionar el estrés.
          </p>
          <p className="text-xs text-white/60">
            © 2026 Adiós Ansiedad. Todos los derechos reservados.
          </p>
          <p className="max-w-2xl text-xs italic text-white/50">
            Las decisiones sobre tu salud deben ser consultadas con profesionales calificados. Este
            material es complementario, nunca reemplaza atención profesional.
          </p>
        </div>
      </div>
    </footer>
  );
}