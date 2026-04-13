
"use client";

import React from 'react';
import { motion } from 'framer-motion';




export default function SectionWhite() {
  const frase = "de 10 millones de amantes de la musica";

  return (
    <section className="relative w-full bg-white   pt-[120px]  text-black overflow-hidden "
//   style={{
//   clipPath: "polygon(0 100%, 0 20px, 10% 40px, 20% 60px, 30% 80px, 40% 95px, 50% 110px, 60% 95px, 70% 80px, 80% 60px, 90% 40px, 100% 20px, 100% 100%)"
// }}
    
    >
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
  <svg
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    className="block w-full h-[80px]"
  >
    <path
      d="M0,0 C360,120 1080,120 1440,0 L1440,0 L0,0 Z"
      fill="white"
    />
  </svg>
</div>
      

      

      {/* 2. SECCIÓN DE ROSTROS */}
      <div className="flex flex-col items-center pt-32 pb-12 text-center">
      
        <h2 className="text-[35px] md:text-[55px] font-black leading-[0.8] tracking-[-0.10em] [transform:scaleY(1.3)] inline-block mb-14 ">
          El corazón de la música <br /> que late en todo el mundo
        </h2>

        <h3>Nuestra aplicación está disponible en más de 180 países y traducida a 26 idiomas</h3>
        
        <div className="w-full max-w-4xl px-4 mt-10">
          <img src="/rostros-deezer.svg" alt="Rostros" className="w-full h-auto object-contain" />
        </div>
      </div>

      {/* 3. LETRERO INFINITO */}
      <div className="bg-white py-10 md:py-20 overflow-hidden flex items-center">
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: [0, "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            },
          }}
        >
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center">
            
              <span className="text-[3rem] md:text-[7rem] font-black leading-[0] tracking-[-0.09em] [transform:scaleY(1.3)] inline-block ">
                {frase}
              </span>
              
              {/* CONTENEDOR DEL LOGO */}
              <div className="min-w-[8rem] md:min-w-[16rem] flex justify-center items-center">
                <img 
                  src="/corazon-deezer.svg" 
                  className="h-[3rem] md:h-[7rem] w-auto object-contain" 
                  alt="logo" 
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}

