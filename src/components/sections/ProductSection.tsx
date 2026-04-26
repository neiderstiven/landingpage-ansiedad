import { Button } from "@/components/ui/button";
import { productConfig } from "@/lib/config";
import { Check, Zap, Leaf, EyeOff, BookOpen, Wallet, Download } from "lucide-react";

export default function ProductSection() {
  const features = [
    "15 técnicas paso a paso para momentos de tensión",
    "Técnicas de respiración de aplicación rápida",
    "Método de grounding para momentos intensos",
    "Rituales nocturnos para descansar mejor",
    "Técnicas discretas para usar en público sin que nadie lo note",
    "Ejercicios de reprogramación mental prácticos",
    "Guía de bolsillo: qué hacer cuando lo necesites",
  ];

  const benefits = [
    { icon: Zap, title: "Acción rápida", desc: "Técnicas diseñadas para usar en momentos de tensión o preocupación." },
    { icon: Leaf, title: "Método natural", desc: "Herramientas prácticas sin efectos secundarios ni dependencia." },
    { icon: EyeOff, title: "Discretas e invisibles", desc: "Puedes usarlas en una reunión, en el transporte, o en casa. Nadie lo notará." },
    { icon: BookOpen, title: "Respaldo práctico", desc: "Basadas en metodologías de gestión emocional y técnicas de respiración." },
    { icon: Wallet, title: "Más barato que un café", desc: "Una sesión de terapia cuesta $50-150. Esto cuesta menos que un café con leche." },
    { icon: Download, title: "Acceso inmediato", desc: "PDF descargable al instante. Sin esperas, sin suscripciones, tuyo para siempre." },
  ];

  const scrollToFinal = () => {
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="product" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#7FB9A8]/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#5B9687]">
            La solución
          </span>
          <h2 className="mt-5 font-serif text-3xl font-bold text-[#2C3E50] md:text-4xl lg:text-5xl">
            Presentamos <span className="text-[#5B8DB8]">"Adiós Ansiedad"</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 md:text-lg">
            El sistema de bolsillo con 15 técnicas prácticas para gestionar el estrés en momentos de tensión.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#5B8DB8]/20 to-[#7FB9A8]/20 blur-2xl" />
            <img
              src="/assets/ebook-ansiedad.png"
              alt="Adiós Ansiedad - Kit de bienestar"
              className="relative rounded-3xl shadow-xl"
            />
          </div>

          <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-[#FAF7F2] to-white p-8 shadow-lg md:p-10">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-4xl font-bold text-[#2C3E50] md:text-5xl">$5.99</span>
              <span className="text-sm text-slate-500">USD · Pago único</span>
            </div>

            <h3 className="mt-6 font-serif text-xl font-bold text-[#2C3E50]">
              ¿Qué encontrarás dentro?
            </h3>
            <ul className="mt-4 space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7FB9A8] text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-slate-700 md:text-base">{f}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={() => window.open(productConfig.HOTMART_CHECKOUT_URL, "_blank", "noopener,noreferrer")}
              className="mt-8 h-14 w-full rounded-full bg-[#5B8DB8] text-base font-semibold text-white shadow-lg shadow-[#5B8DB8]/30 transition hover:bg-[#4A7BA3] hover:shadow-xl"
            >
              Obtener Acceso Inmediato
            </Button>
          </div>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#5B8DB8] to-[#7FB9A8] text-white shadow">
                <b.icon className="h-6 w-6" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-[#2C3E50]">{b.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}