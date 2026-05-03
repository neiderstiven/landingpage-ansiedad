import { LandingData } from "../domain/entities";

export const landingData: LandingData & { heroStats: { downloads: string; rating: string } } = {
  stats: [
    { value: "2,500+", label: "Descargas del kit" },
    { value: "4.9/5", label: "Calificación promedio" },
    { value: "15+", label: "Países" },
    { value: "7", label: "Días de garantía" },
  ],
  testimonials: [
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
  ],
  biblicalPromises: [
    "«Yo les daré descanso», dice el Señor. (Mateo 11:28)",
    "«No temas, porque yo estoy contigo; no te angusties, porque yo seré tu Dios que te sustentará». (Isaías 41:10)",
    "«La paz de Dios, la cual sobrepasa todo entendimiento, guardará vuestros corazones y sus pensamientos». (Filipenses 4:7)",
    "«Cuando pases por aguas, yo estaré contigo; y por ríos, no te arrastrarán». (Isaías 43:2)",
    "«Yo he vencido al mundo», dice Jesús. (Juan 16:33)",
    "«No os preocupéis por nada, sino en toda oración y suplicación, con acción de gracias, presentad vuestros pedidos a Dios». (Filipenses 4:6)",
    "«El Señor es mi refugio y mi fortaleza, mi Dios, en quien confío». (Salmo 91:2)",
    "«No te conformes con este mundo, sino transformaos por la renovación de vuestro entendimiento». (Romanos 12:2)"
  ],
  faqs: [
    {
      q: "¿Qué tan rápido actúan las técnicas?",
      a: "Muchas de las técnicas están diseñadas para dar un alivio inicial en pocos minutos. Algunas, como las técnicas de respiración, pueden sentirse incluso en los primeros 60 segundos. Los rituales nocturnos y los ejercicios de reprogramación mental requieren práctica constante para ver efectos más profundos.",
    },
    {
      q: "¿Funciona si ya probé otras opciones?",
      a: "Sí. Este kit fue creado pensando justo en personas que ya probaron meditación, apps o consejos genéricos sin los resultados esperados. Las técnicas aquí están diseñadas para el momento de tensión real, no para sesiones largas de meditación ideal.",
    },
    {
      q: "¿Es un reemplazo de la terapia?",
      a: "No. Este material es una herramienta educativa y complementaria. No reemplaza terapia, consejería, o medicación prescrita por un profesional. Si estás en tratamiento, estas técnicas pueden complementar tu proceso.",
    },
    {
      q: "¿Cómo recibo el PDF?",
      a: "Inmediatamente después del pago recibirás un correo con los enlaces de descarga del PDF principal y los 2 bonos. Puedes descargarlo en tu celular, tablet o computadora y tenerlo para siempre.",
    },
    {
      q: "¿Tiene garantía?",
      a: "Sí. Tienes 7 días de garantía total. Si las técnicas no te funcionan, te devolvemos el 100% de tu dinero. Sin preguntas. Sin complicaciones.",
    },
    {
      q: "¿Es seguro el pago?",
      a: "Totalmente. Procesamos pagos con plataformas certificadas que cifran toda la información. Aceptamos tarjetas, PayPal y, para Colombia, PSE y Nequi.",
    },
    {
      q: "¿Necesito conocimientos previos?",
      a: "No. El kit está escrito en lenguaje sencillo y empático. Cada técnica se explica paso a paso. No necesitas experiencia previa en meditación, psicología ni bienestar.",
    },
    {
      q: "¿Puedo usarlo en mi celular?",
      a: "Sí. El PDF está optimizado para leerse en celular, tablet o computadora. Muchas personas lo guardan en su celular para tenerlo siempre a mano en el momento que lo necesiten.",
    },
  ],
  heroStats: {
    downloads: "+2,500",
    rating: "4.9/5"
  }
};
