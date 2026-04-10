"use client";
import { useState } from "react";

import { IoCheckmarkOutline } from "react-icons/io5";
import Link from "next/link";

export default function BlackWaveSection() {

  const [mousePos, setMousePos] = useState({ x: 0 });

  // Función para capturar el movimiento horizontal del mouse
  const handleMouseMove = (e) => {
    const { clientX } = e;
    // Calculamos la distancia horizontal al centro de la pantalla
    // y dividimos por un valor alto (ej. 80) para un movimiento sutil
    const x = (clientX - window.innerWidth / 2) / 80;
    setMousePos({ x });
  };







  return (
    <div className="w-full bg-white">
      {/* 1. Curva Superior (El "hachazo" blanco hacia el negro) */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1100 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:h-[100px]"
        >
        
          <path
            d="M0,0 C300,100 900,100 1400,0 L1200,0 L0,0 Z"
            fill="#080812"
            transform="rotate(180 600 60)"
          ></path>
        </svg>
      </div>
     

      {/* seccion 1 dela seccion black*/}

      <section className="bg-[#080812] text-white py-10 flex flex-col items-center ">
        <div className="max-w-[800px] px-6 text-center mb-10 flex flex-col items-center gap-4">
          <h2 className="text-[48px] md:text-[40px] font-[900] leading-[0.9] tracking-[-0.07em] mb-12 [transform:scaleY(1.3)]">
            Elige la oferta que <br /> más se adapte a ti
          </h2>

          {/* Tarjeta Blanca Premium */}
          <div className="bg-white rounded-[10px] p-4 text-black inline-block w-full max-w-[280px] shadow-xl">
            <span className="bg-[#a238ff] text-white text-[16px] font-bold px-3 py-1 rounded-[6px] uppercase leading-[0.9] tracking-[-0.07em] mb-12 [transform:scaleY(1.3)]">
              Premium
            </span>
            <h3 className="text-[30px] font-[900] mt-6 leading-[0.9] tracking-[-0.07em] mb-2 [transform:scaleY(1.3)]">
              1 MES GRATIS
            </h3>
            <p className="text-gray-500 text-sm mt-2 mb-8">
              luego, Col$19.500/mes
            </p>
            <Link href="/email">
              <button className="bg-[#a238ff] text-white w-full py-1 cursor-pointer rounded-[10px] font-bold hover:bg-[#8b2be2] transition-colors">
                Pruébalo gratis
              </button>
            </Link>
            <ul className="mt-8 text-left flex flex-col gap-1 text-sm font-medium">
              <li className="flex items-center gap-1">
                <IoCheckmarkOutline /> Más de 120 millones de canciones
              </li>
              <li className="flex items-center gap-1">
                <IoCheckmarkOutline /> Mixes y playlists solo para ti
              </li>
              <li className="flex items-center gap-1">
                <IoCheckmarkOutline /> Letras con traducción
              </li>
              <li className="flex items-center gap-1">
                <IoCheckmarkOutline /> Música sin anuncios
              </li>
              <li className="flex items-center gap-1 ">
                <IoCheckmarkOutline /> Reproducción sin conexión
              </li>
            </ul>
          </div>
          <div className=" w-full max-w-[280px] mt-8  text-center flex flex-col gap-1 text-sm font-medium bg-white p-2 rounded-md">
            <p className="text-sm font-medium text-[#112]">
              Descubre todas nuestras ofertas
            </p>
          </div>
        </div>
  
        </section>

       
        {/* seccion 2 dela seccion black*/}

      <section className="relative text-white w-full bg-[#080812] overflow-hidden flex flex-col items-center justify-center min-h-screen py-20"
      onMouseMove={handleMouseMove}>
     
       <div className="absolute inset-0 z-0 flex items-center justify-center opacity-70">
        <svg
          viewBox="0 0 1300 500"
          className="w-full max-w-[1200px]"
          xmlns="http://www.w3.org/2000/svg"
        >
  {[...Array(16)].map((_, i) => {
  // 1. Posición horizontal de cada elipse
  const x = 90 + i * 75; 

  // 2. El centro de las 16 elipses (7.5)
  const center = 7.5;

  // 3. Distancia de la elipse actual al centro 
  const distance = Math.abs(i - center);

  // 4. El tamaño (más grande en el centro)
  const size = 20 + (8 - distance) * 22; 

  // 5. El Factor de Movimiento (Acordeón)
  // Las del centro (distance cerca de 0) tienen factor alto.
  // Las de los bordes (distance cerca de 8) tienen factor bajo.
  const moveFactor = (8- distance) / 1;

  return (
    <ellipse
      key={i}
      cx={x}
      cy="250"
      rx={size * 0.5} 
      ry={size * 1.2}
      fill="none"
      stroke="#bc77ff" 
      strokeWidth="1.8"
      opacity="0.8"
      style={{
        filter: 'drop-shadow(0 0 3px rgba(188, 119, 255, 0.4))',
        // Aquí usamos el moveFactor que acabamos de calcular arriba
        transform: `translateX(${mousePos.x * moveFactor}px)`,
        transition: 'transform 0.2s ease-out',
        transformBox: 'fill-box', // Ayuda a que la transformación sea más precisa en SVGs
        transformOrigin: 'center'
      }}
    />
  );
})}
</svg>
        
        </div>
     
    <div className="relative z-10 flex flex-col gap-8 items-center text-center px-6">
  
  <h2 className="
    /* ESTILOS DE PC (Tus originales intactos) */
    md:text-[40px] md:leading-[0.9] md:tracking-[-0.07em] md:[transform:scaleY(1.3)]
    
    /* AJUSTE PARA MÓVIL (Escalado para que quepa en pantalla) */
    text-[32px] leading-[1] tracking-tight
    
    font-[900] text-white
  ">
    ¿Buscas una canción?
    <br />
    ¡La encontrarás en Deezer con un
    <br /> sonido de alta calidad! 
  </h2>

  <button className="
    /* ESTILOS DE PC (Tus originales) */
    md:px-2 md:py-1 md:rounded-[10px] md:font-bold md:text-[16px]
    
    /* AJUSTE PARA MÓVIL (Un poco más de área táctil) */
    px-6 py-3 rounded-full text-[14px]
    
    bg-white mt-2 text-black font-bold
  ">
    Explora nuestro catálogo 
  </button>

</div>
      </section>
      


   <section className="bg-[#080812] text-white py-20 flex flex-col items-center ustify-cente">
  {/* Título de sección con tu estilo personalizado */}
  <h2 className="text-[32px] md:text-[40px] font-[900] leading-[0.9] tracking-[-0.07em] [transform:scaleY(1.3)] text-center mb-16 uppercase italic">
    Mucho más que un servicio <br /> de streaming de música
  </h2>

  {/* Contenedor de Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3  max-w-[1100px] w-full px-6">
    
   
    <div className="w-[78%] bg-[#080812]rounded-[24px] overflow-hidden flex flex-col h-[520px]">
      
        <h3 className="text-[15px] font-[900] absolute z-10 mt-15 ml-5 leading-[0.9] tracking-[-0.07em] [transform:scaleY(1.3)]  text-center text-[#121212]">
          Identifica las canciones que <br /> suenan a tu alrededor
        </h3>
      
      <div className="flex-1 relative flex items-center justify-center">
      
        <div className="w-[85%] h-[90%] bg-gray-200/20 rounded-t-xl border-x border-t border-white/30 shadow-2xl">
           <img src="/images/card-deezer3.webp" alt="" className="w-full h-full object-cover rounded-[10px]" />
        </div>
      </div>
    </div>

    {/* Card 2 - Tests de música */}
    <div className="w-[78%] bg-[#080812] rounded-[24px] overflow-hidden flex flex-col h-[520px]">
      
        <h3 className="text-[15px] font-[900] absolute z-10 mt-15 ml-5 leading-[0.9] tracking-[-0.07em] [transform:scaleY(1.3)]  text-center text-[#121212]">
          Diviértete con nuestros <br /> tests de música
        </h3>
      
      <div className="flex-1 relative flex items-center justify-center">
       
        <div className="w-[85%] h-[90%] bg-gray-200/20 rounded-t-xl border-x border-t border-white/30 shadow-2xl">
           <img src="/images/card-deezer2.webp" alt="" className="w-full h-full object-cover rounded-[12px]" />
        </div>
      </div>
    </div>

   
    <div className=" w-[78%] bg-[#080812]rounded-[24px]  flex flex-col h-[520px]">
     
        <h3 className="text-[15px] font-[900] absolute z-10 mt-15 ml-5 leading-[0.9] tracking-[-0.07em] [transform:scaleY(1.3)]  text-center text-[#121212]">
          Canta a pleno pulmón <br /> siguiendo las letras
        </h3>
      
      <div className="flex-1 relative flex items-center justify-center">
     
        <div className="w-[85%] h-[90%] bg-gray-200/20 rounded-t-xl border-x border-t border-white/30 shadow-2xl">
           <img src="/images/card-deezer1.webp" alt="" className="w-full h-full object-cover rounded-[12px]" />
        </div>
      </div>
    </div>

  </div>
</section>

    </div>
  );
}
