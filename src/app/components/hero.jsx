

import React from 'react'
import { FaStar } from "react-icons/fa6"; // iconos de react como pediste

export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex flex-col items-center justify-center bg-white pt-40 pb-12 px-4">
      
      {/* el texto gigante ahora derecho y mas grueso */}
      <div className="max-w-[1000px] text-center mb-8">
        <h1 className="text-[58px] md:text-[110px] font-[1000] leading-[0.8] tracking-[-0.06em] text-black uppercase">
          Donde la <br />
          música <br />
          cobra vida
        </h1>
      </div>

      {/* el subtitulo con buen peso */}
      <p className="text-[18px] md:text-[22px] font-[800] text-black mb-10 text-center">
        Música en streaming con Deezer
      </p>

      {/* el boton morado principal */}
      <button className="bg-[#a238ff] hover:bg-[#8b2ee0] text-white font-black py-4 px-12 rounded-full text-[16px] transition-all mb-14 shadow-lg">
        Pruébalo gratis
      </button>

      {/* seccion de las estrellas con react icons */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex text-black gap-1 text-xl">
          {/* aqui estan los iconos que me dijiste */}
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </div>
        <p className="text-gray-600 text-[13px] font-bold text-center max-w-[280px] leading-tight">
          Más de 3 millones de calificaciones con 5 estrellas
        </p>
      </div>

    </section>
  )
}