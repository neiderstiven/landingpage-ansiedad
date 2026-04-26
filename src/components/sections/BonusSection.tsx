import { Button } from "@/components/ui/button";
import { productConfig } from "@/lib/config";
import { Gift, Sparkles, Moon } from "lucide-react";

export default function BonusSection() {
  const scrollToProduct = () => {
    document.getElementById("product")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-b from-[#FAF7F2] to-[#F0EBE3] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8A87C]/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#C47A52]">
            <Gift className="h-4 w-4" />
            Bonos incluidos gratis
          </span>
          <h2 className="mt-5 font-serif text-3xl font-bold text-[#2C3E50] md:text-5xl">
            Pero eso no es todo...
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 md:text-lg">
            Al comprar hoy, recibes estos 2 bonos exclusivos completamente gratis.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#7FB9A8]/20 to-[#E8A87C]/20 blur-2xl" />
            <img
              src="/assets/bonos-adicionales.png"
              alt="Kit de bonos - Kit de Emergencia y Guía de Sueño"
              className="relative rounded-3xl shadow-xl"
            />
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8A87C]/20 text-[#C47A52]">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-serif text-lg font-bold text-[#2C3E50] md:text-xl">
                      Kit de Emergencia para Momentos Intensos
                    </h3>
                    <span className="rounded-full bg-[#E8A87C]/20 px-3 py-0.5 text-xs font-bold text-[#C47A52]">
                      Valor: $7
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    Hoja de 1 página con 12 tarjetas recortables para el entorno real que te ayudarán
                    a encontrar calma en el momento.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#5B8DB8]/15 text-[#5B8DB8]">
                  <Moon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-serif text-lg font-bold text-[#2C3E50] md:text-xl">
                      Guía de Rituales de Sueño Profundo
                    </h3>
                    <span className="rounded-full bg-[#5B8DB8]/15 px-3 py-0.5 text-xs font-bold text-[#5B8DB8]">
                      Valor: $9
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    5 rituales nocturnos para apagar la mente y lograr una rutina nocturna para un
                    descanso más profundo.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#2C3E50] to-[#5B8DB8] p-6 text-center text-white shadow-xl md:p-8">
              <p className="text-sm uppercase tracking-wider opacity-80">Valor total del paquete</p>
              <div className="mt-2 flex items-center justify-center gap-3">
                <span className="text-lg text-white/60 line-through md:text-xl">$26 USD</span>
                <span className="font-serif text-3xl font-bold md:text-4xl">$5.99 USD</span>
              </div>
              <p className="mt-2 text-xs opacity-80 md:text-sm">
                Precio de lanzamiento por tiempo limitado
              </p>
              <Button
                onClick={() => window.open(productConfig.HOTMART_CHECKOUT_URL, "_blank", "noopener,noreferrer")}
                className="mt-5 h-12 w-full rounded-full bg-white px-8 font-semibold text-[#2C3E50] transition hover:bg-[#FAF7F2]"
              >
                Quiero Todo por $5.99
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}