import React from 'react';

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

const BiblicalPromises = () => {
  // Pick a random promise each time the component renders (i.e., on page reload)
  const randomPromise = biblicalPromises[Math.floor(Math.random() * biblicalPromises.length)];

  return (
    <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/20 rounded-2xl px-8 py-6 mx-16 mb-16">
      <p className="text-xl sm:text-2xl font-bold text-white mb-2">
        {randomPromise}
      </p>
      <footer className="text-[#C4B5D4] text-sm">
        — Con Dios todo es posible
      </footer>
    </div>
  )
};

export default BiblicalPromises;