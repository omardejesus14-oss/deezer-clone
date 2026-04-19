"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionWhite() {
  const frase = "de 10 millones de amantes de la musica";

  return (
    <section className="relative w-full bg-white     text-black overflow-hidden ">
      {/* 2. SECCIÓN DE ROSTROS */}
      <div className="flex flex-col items-center pt-32 pb-12 text-center">
        <h2 className="text-[35px] md:text-[50px] font-black leading-[0.8] tracking-[-0.10em] [transform:scaleY(1.3)] inline-block mb-14 ">
          El corazón de la música <br /> que late en todo el mundo
        </h2>

        <h3>
          Nuestra aplicación está disponible en más de 180 países y traducida a
          26 idiomas
        </h3>

        <div className="w-full max-w-4xl px-4 mt-10">
          <img
            src="/rostros-deezer.svg"
            alt="Rostros"
            className="w-full h-auto object-contain"
          />
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

      <div className="w-full bg-white relative overflow-hidden ">
        {/* IMAGEN DE ARRIBA */}
        <div className="w-full flex justify-center overflow-hidden pt-10 md:pt-20">
          <img
            src="https://cdn-images.dzcdn.net/images/misc/599ef65d99e9aaa5923c0f4c5b397566/0x1900-000000-80-0-0.png"
            alt="deezer banner"
            className=" object-cover w-[180%]  md:w-[60%]"
          />
        </div>

        {/* CURVA ABAJO DE LA IMAGEN */}
        <div className="absolute bottom-[55%] left-0 w-full h-[100px]" />

        {/* CONTENIDO */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 gap-6">
          <h2 className="text-[35px] md:text-[50px] font-black leading-[0.8] tracking-[-0.10em] [transform:scaleY(1.3)] inline-block mb-7 ">
            Transfiere toda tu <br /> biblioteca de música a <br /> Deezer con
            solo unos clics
          </h2>

          <p className="text-[#000000] text-sm md:text-[15px] max-w-[600px]">
            ¡Al pasarte a Deezer, no perderás tus playlists ni favoritos, lo
            prometemos!
          </p>

          {/* BOTONES */}
          <div className="flex flex-col  gap-4 mt-2 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-[10px] font-bold">
              Pruébalo gratis
            </button>

            <button className="bg-black text-white px-6 py-2 rounded-[10px] font-bold">
              Transferir mi música
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
