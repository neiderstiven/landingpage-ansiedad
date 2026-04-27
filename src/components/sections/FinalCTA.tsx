import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Shield, Lock, CreditCard, Smartphone } from "lucide-react";
import { productConfig } from "@/lib/config";

export default function FinalCTA() {
  const [time, setTime] = useState({ minutes: 3, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        const total = prev.minutes * 60 + prev.seconds - 1;
        if (total <= 0) return { minutes: 3, seconds: 30 };
        return { minutes: Math.floor(total / 60), seconds: total % 60 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const included = [
    "PDF Adiós Ansiedad — 15 técnicas",
    "Kit de Emergencia para Momentos Intensos",
    "Guía de Rituales de Sueño Profundo",
    "Garantía de satisfacción 7 días",
  ];

  return (
    <section id="final-cta" className="bg-gradient-to-br from-[#EAF1F7] via-[#FAF7F2] to-[#F0EBE3] py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Countdown */}
        <div className="mx-auto max-w-lg rounded-full bg-[#2C3E50] px-6 py-3 text-center text-white shadow-lg">
          <div className="flex items-center justify-center gap-3 text-sm md:text-base">
            <span className="font-medium">Precio de lanzamiento por tiempo limitado:</span>
            <span className="flex items-center gap-1 font-mono text-lg font-bold text-[#E8A87C] md:text-xl">
              <span className="rounded bg-white/10 px-2 py-0.5">{pad(time.minutes)}</span>
              <span>:</span>
              <span className="rounded bg-white/10 px-2 py-0.5">{pad(time.seconds)}</span>
            </span>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#2C3E50] md:text-4xl lg:text-5xl">
            Recupera momentos de paz.
          </h2>
          <p className="mt-3 font-serif text-xl italic text-[#5B8DB8] md:text-2xl">
            Descubre herramientas que muchas personas usan para gestionar el estrés.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-slate-600 md:text-lg">
            Un kit práctico de bienestar para usar cuando lo necesites. Descarga inmediata.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="bg-gradient-to-br from-[#5B8DB8] to-[#7FB9A8] p-8 text-center text-white md:p-10">
            <p className="text-sm uppercase tracking-wider opacity-90 md:text-base">
              Paquete completo
            </p>
            <div className="mt-3 flex items-center justify-center gap-4">
              <span className="text-xl text-white/70 line-through md:text-2xl">$26 USD</span>
              <span className="font-serif text-5xl font-bold md:text-6xl">$5.99</span>
            </div>
            <p className="mt-2 text-sm opacity-90 md:text-base">USD · Pago único · Acceso de por vida</p>
          </div>

          <div className="p-8 md:p-10">
            <ul className="space-y-3">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7FB9A8] text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-slate-700 md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <Button className="mt-8 h-16 w-full rounded-full bg-gradient-to-r from-[#E8A87C] to-[#C47A52] text-lg font-semibold text-white shadow-xl shadow-[#E8A87C]/30 transition hover:shadow-2xl"
              onClick={() => window.open(productConfig.HOTMART_CHECKOUT_URL, "_blank", "noopener,noreferrer")}>
              Descargar el Kit — $5.99 USD
            </Button>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 md:gap-6 md:text-sm">
              <span className="flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-[#7FB9A8]" />
                Pago seguro
              </span>
              <span className="flex items-center gap-1.5">
                <CreditCard className="h-4 w-4 text-[#7FB9A8]" />
                Tarjeta / PayPal / PSE / Nequi / Bancolombia
              </span>
              <span className="flex items-center gap-1.5">
                <Smartphone className="h-4 w-4 text-[#7FB9A8]" />
                Acceso inmediato
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-start gap-4 rounded-3xl border-2 border-[#7FB9A8]/30 bg-white p-6 shadow-sm md:p-8">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7FB9A8] to-[#5B9687] text-white shadow-lg">
            <Shield className="h-7 w-7" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-[#2C3E50] md:text-xl">
              Garantía de Satisfacción 7 Días
            </h3>
            <p className="mt-1 text-sm text-slate-600 md:text-base">
              Si las técnicas no te funcionan, te devolvemos el 100% de tu dinero. Sin preguntas.
              Sin complicaciones. El riesgo es completamente nuestro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}