import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const stats = [
    { value: "2,500+", label: "Descargas del kit" },
    { value: "4.9/5", label: "Calificación promedio" },
    { value: "15+", label: "Países" },
    { value: "7", label: "Días de garantía" },
  ];

  const testimonials = [
    {
      initial: "M",
      name: "María G.",
      role: "Profesional, 34 años",
      text: "Usé la técnica de respiración en medio de una reunión difícil y pude terminarla con calma. La llevo siempre en el celular por si la necesito.",
      color: "bg-[#5B8DB8]",
    },
    {
      initial: "C",
      name: "Carlos R.",
      role: "Emprendedor, 29 años",
      text: "Probé varias apps antes. Este material es diferente porque se usa en el momento justo. La técnica de grounding la aplico antes de reuniones con inversores.",
      color: "bg-[#7FB9A8]",
    },
    {
      initial: "A",
      name: "Ana L.",
      role: "Madre y profesional, 41 años",
      text: "Los rituales nocturnos del bono fueron lo que más necesitaba. El de 'descarga mental por escrito' me ayuda a vaciar la cabeza antes de dormir.",
      color: "bg-[#E8A87C]",
    },
    {
      initial: "D",
      name: "Diego M.",
      role: "Estudiante, 23 años",
      text: "La técnica 5-4-3-2-1 de grounding la usé antes de un examen final. Me tomó menos de un minuto y pude concentrarme. Simple y concreta.",
      color: "bg-[#5B8DB8]",
    },
    {
      initial: "L",
      name: "Laura P.",
      role: "Freelancer, 37 años",
      text: "Las técnicas de manos discretas las uso en el transporte público y en videollamadas. Nadie nota que estás haciendo algo, pero el efecto se siente rápido.",
      color: "bg-[#7FB9A8]",
    },
    {
      initial: "R",
      name: "Roberto S.",
      role: "Gerente, 45 años",
      text: "Me dio herramientas prácticas para el día a día. Lo uso como referencia rápida entre reuniones. La técnica del interruptor es mi favorita.",
      color: "bg-[#E8A87C]",
    },
  ];

  const biblicalPromises = [
    "«Yo les daré descanso», dice el Señor. (Mateo 11:28)",
    "«No temas, porque yo estoy contigo; no te angusties, porque yo seré tu Dios que te sustentará». (Isaías 41:10)",
    "«La paz de Dios, la cual sobrepasa todo entendimiento, guardará vuestros corazones y sus pensamientos». (Filipenses 4:7)",
    "«Cuando pases por aguas, yo estaré contigo; y por ríos, no te arrastrarán». (Isaías 43:2)",
    "«Yo he vencido al mundo», dice Jesús. (Juan 16:33)",
    "«No os preocupéis por nada, sino en toda oración y suplicación, con acción de gracias, presentad vuestros pedidos a Dios». (Filipenses 4:6)",
    "«Yo te doy descanso a los que están cansados y cargados», dice el Señor. (Mateo 11:28)",
    "«No temas, porque yo estoy contigo; no te angusties, porque yo seré tu Dios que te sustentará». (Isaías 41:10)",
    "«El Señor es mi refugio y mi fortaleza, mi Dios, en quien confío». (Salmo 91:2)",
    "«No te conformes con este mundo, sino transformaos por la renovación de vuestro entendimiento». (Romanos 12:2)"
  ];

  // Pick a random promise each time the component renders (i.e., on page reload)
  const randomPromise = biblicalPromises[Math.floor(Math.random() * biblicalPromises.length)];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8A87C]/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#C47A52]">
            Testimonios reales
          </span>
          <h2 className="mt-5 font-serif text-3xl font-bold text-[#2C3E50] md:text-4xl lg:text-5xl">
            Lo que dicen quienes ya lo probaron
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gradient-to-br from-[#FAF7F2] to-white p-5 text-center shadow-sm md:p-6"
            >
              <div className="font-serif text-3xl font-bold text-[#5B8DB8] md:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs text-slate-600 md:text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl shadow-xl lg:col-span-1">
            <img
              src="/assets/meditacion.png"
              alt="Persona en paz"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#E8A87C] text-[#E8A87C]" />
                ))}
              </div>
              <p className="mt-3 font-serif text-lg italic leading-snug">
                "La calma es una habilidad que se practica."
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            {testimonials.slice(0, 4).map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-[#FAF7F2] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Quote className="h-6 w-6 text-[#5B8DB8]/40" />
                <p className="mt-3 text-sm text-slate-700 md:text-base">{t.text}</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${t.color} font-semibold text-white`}>
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#2C3E50]">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {testimonials.slice(4).map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-[#FAF7F2] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Quote className="h-6 w-6 text-[#5B8DB8]/40" />
              <p className="mt-3 text-sm text-slate-700 md:text-base">{t.text}</p>
              <div className="mt-5 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${t.color} font-semibold text-white`}>
                  {t.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#2C3E50]">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-to-br from-[#2C3E50] to-[#5B8DB8] p-8 text-center text-white md:p-12">
          <p className="font-serif text-lg italic md:text-xl lg:text-2xl">
            {randomPromise}
          </p>
          <p className="mt-3 text-sm text-white/80 md:text-base">(Romanos 12:2)</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#E8A87C]">
            — Con Dios todo es posible
          </p>
        </div>
      </div>
    </section>
  );
}