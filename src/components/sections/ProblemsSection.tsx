import { Wind, CloudLightning, MoonStar, AlertCircle, MessageCircleOff, Users2 } from "lucide-react";

export default function ProblemsSection() {
  const problems = [
    { icon: Wind, title: "Opresión en el pecho", desc: "Esa sensación constante de que algo aprieta y no deja respirar bien." },
    { icon: CloudLightning, title: "Mentes que no se apagan", desc: "Pensamientos acelerados difíciles de controlar, especialmente de noche." },
    { icon: MoonStar, title: "Noches en las que el sueño no llega", desc: "Despertarse a las 3AM con preocupaciones ocupando la mente." },
    { icon: AlertCircle, title: "Alerta constante", desc: "La sensación de que algo malo está a punto de pasar, sin poder identificar qué." },
    { icon: MessageCircleOff, title: "Difícil de explicar", desc: "La sensación de que esto es difícil de compartir con quienes no lo han experimentado." },
    { icon: Users2, title: "Momentos intensos en público", desc: "Tensión intensa en situaciones sociales que genera el impulso de salir corriendo." },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#5B8DB8]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#5B8DB8]">
            Tu experiencia importa
          </span>
          <h2 className="mt-5 font-serif text-3xl font-bold text-[#2C3E50] md:text-4xl lg:text-5xl">
            Estas experiencias son más comunes de lo que crees
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 md:text-lg">
            Muchas personas comparten lo que sientes. No estás solo/a. Y hay herramientas concretas
            que funcionan en el momento.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-[#FAF7F2] p-6 shadow-sm transition hover:border-[#5B8DB8]/30 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#5B8DB8]/10 text-[#5B8DB8] transition group-hover:bg-[#5B8DB8] group-hover:text-white">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#2C3E50]">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}