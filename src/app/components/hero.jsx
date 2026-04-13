

import React from 'react'
import { FaStar } from "react-icons/fa6"; // iconos de react como pediste
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex flex-col items-center justify-center bg-white pt-66 pb-12 px-4">
      
      {/* el texto gigante ahora derecho y mas grueso */}
      <div className="max-w-[1000px] text-center mb-8">
        <h1 className="text-[58px]  md:text-[130px] font-[1000]   text-[#001f] uppercase  leading-[0.8] tracking-[-0.06em] [transform:scaleY(1.2)] ">
          Donde la <br />
          música <br />
          cobra vida
        </h1>
      </div>

    
      <p className="text-[20px] md:text-[32px] font-[900] text-[#001] mb-6 text-center   leading-[0.8] tracking-[-0.06em] [transform:scaleY(1.4)]">
        Música en streaming con Deezer
      </p>

    
      <Link href="/email" >
        <button className="bg-[#a238ff] cursor-pointer hover:bg-[#8b2ee0] text-white font-black py-2 px-4 rounded-[8px] text-[14px] transition-all mb-12 shadow-lg ">
          Pruébalo gratis
        </button>
      </Link>

      <div className="flex flex-col items-center gap-3">
        <div className="flex text-black gap-1 text-xl">
      

          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </div>
        <p className="text-gray-700 text-[13px] font-bold text-center max-w-[280px] ">
          Más de 3 millones de calificaciones con 5 estrellas
        </p>
      </div>

    </section>
  )
}