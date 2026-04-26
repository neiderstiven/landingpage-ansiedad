import { Zap, FlaskConical, Moon, Info } from "lucide-react";

export default function ScienceSection() {
  const items = [
    {
      icon: Zap,
      title: "El nervio vago",
      desc: 'El "botón de pausa" de tu sistema nervioso. Cuando lo activas, tu cuerpo pasa de alarma a calma.',
      color: "from-[#5B8DB8] to-[#4A7BA3]",
    },
    {
      icon: FlaskConical,
      title: "Cortisol",
      desc: "La hormona del estrés. En dosis moderadas es útil. Pero cuando está elevado todo el tiempo, genera agotamiento.",
      color: "from-[#E8A87C] to-[#C47A52]",
    },
    {
      icon: Moon,
      title: "Melatonina",
      desc: "Tu reloj biológico. Sin ella, incluso si estás físicamente cansado, tu mente sigue activa.",
      color: "from-[#7FB9A8] to-[#5B9687]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#2C3E50] py-20 text-white md:py-28">
      <img
        src="https://mgx-backend-cdn.metadl.com/generate/images/1156869/2026-04-26/nmjbltyaafna/science-abstract-calm.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2C3E50]/80 to-[#2C3E50]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
            La ciencia detrás de todo
          </span>
          <h2 className="mt-5 font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
            ¿Por qué funcionan estas técnicas?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80 md:text-lg">
            No es magia ni ilusión. Estas técnicas funcionan porque entienden cómo funciona tu cuerpo.
            Aquí está la ciencia en lenguaje sencillo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}>
                <item.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold md:text-2xl">{item.title}</h3>
              <p className="mt-3 text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-white/5 p-6 backdrop-blur-sm md:p-8">
          <p className="text-center text-white/90 md:text-lg">
            Las técnicas en este kit actúan directamente sobre estos tres elementos.
          </p>
          <p className="mt-3 text-center text-sm text-white/70">
            No te pedimos que "tengas fuerza de voluntad" o que "simplemente relajes". Te damos
            herramientas basadas en cómo funciona realmente tu biología.
          </p>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#E8A87C]" />
          <p>
            <span className="font-semibold text-white/90">Nota importante:</span> Esta guía es
            educativa y complementa el apoyo profesional. No reemplaza terapia, consejería, o
            medicación prescrita por un profesional de salud.
          </p>
        </div>
      </div>
    </section>
  );
}