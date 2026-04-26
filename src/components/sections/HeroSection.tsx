import { Button } from "@/components/ui/button";
import { productConfig } from "@/lib/config";
import { Download, Shield, Lock, Users, Star } from "lucide-react";

export default function HeroSection() {
  const scrollToProduct = () => {
    document.getElementById("product")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#EAF1F7] via-[#FAF7F2] to-[#F0EBE3] pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#7FB9A8]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-[#E8A87C]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-medium text-[#5B8DB8] shadow-sm backdrop-blur md:text-sm">
              <Users className="h-4 w-4" />
              <span>+2,500 descargas del kit de bienestar</span>
            </div>

            <h1 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-[#2C3E50] md:text-5xl lg:text-6xl">
              15 técnicas de bienestar para el{" "}
              <span className="text-[#5B8DB8]">momento en que más se necesitan</span>
            </h1>

            <p className="mt-5 text-lg text-slate-600 md:text-xl">
              No estás roto/a. Solo necesitas herramientas que funcionen con tu biología.
            </p>

            <p className="mt-3 text-sm italic text-slate-500">
              Un sistema de bolsillo en tu celular con herramientas para gestionar el estrés del día a día.
              Usado por más de 2,500 personas.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                onClick={() => window.open(productConfig.HOTMART_CHECKOUT_URL, "_blank", "noopener,noreferrer")}
                size="lg"
                className="h-14 rounded-full bg-[#5B8DB8] px-8 text-base font-semibold text-white shadow-lg shadow-[#5B8DB8]/30 transition hover:bg-[#4A7BA3] hover:shadow-xl"
              >
                Explora las técnicas
              </Button>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Star className="h-4 w-4 fill-[#E8A87C] text-[#E8A87C]" />
                <span className="font-medium">4.9/5</span>
                <span className="text-slate-400">· Calificación promedio</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6">
              <div className="flex items-start gap-2">
                <Download className="mt-0.5 h-4 w-4 shrink-0 text-[#7FB9A8]" />
                <span className="text-xs text-slate-600 md:text-sm">Descarga inmediata</span>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="mt-0.5 h-4 w-4 shrink-0 text-[#7FB9A8]" />
                <span className="text-xs text-slate-600 md:text-sm">Garantía 7 días</span>
              </div>
              <div className="flex items-start gap-2">
                <Lock className="mt-0.5 h-4 w-4 shrink-0 text-[#7FB9A8]" />
                <span className="text-xs text-slate-600 md:text-sm">Pago seguro</span>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#7FB9A8]/30 to-[#E8A87C]/30 blur-2xl" />
              <img
                src="/assets/ebook-ansiedad.png"
                alt="Adiós Ansiedad - Kit de bienestar digital en tablet y celular"
                className="relative rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white px-5 py-4 shadow-xl md:block">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5B8DB8] text-xs font-semibold text-white ring-2 ring-white">M</div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7FB9A8] text-xs font-semibold text-white ring-2 ring-white">A</div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8A87C] text-xs font-semibold text-white ring-2 ring-white">C</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#2C3E50]">+2,500 personas</div>
                    <div className="text-xs text-slate-500">ya usan el kit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}