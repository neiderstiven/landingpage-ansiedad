import { Heart, Pause, Brain } from "lucide-react";

export default function ValueProposition() {
  const items = [
    {
      icon: Brain,
      title: "No es magia",
      text: "Es fisiología aplicada con empatía.",
    },
    {
      icon: Heart,
      title: "No necesitas más fuerza de voluntad",
      text: "Necesitas herramientas que funcionen con tu biología.",
    },
    {
      icon: Pause,
      title: "No es sobre eliminar el estrés",
      text: "Es sobre recuperar tu botón de pausa.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="group rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold text-foreground md:text-2xl">
                {item.title}
              </h3>
              <p className="text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}