"use client";
import { useRef, useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { IoCheckmarkOutline } from "react-icons/io5";
import Link from "next/link";

export default function BlackWaveSection() {

   const [activeCard, setActiveCard] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const [mousePos, setMousePos] = useState({ x: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
  setMounted(true);
}, []);

  // Función para capturar el movimiento horizontal del mouse
  const handleMouseMove = (e) => {
  
    const { clientX } = e;
    // Calculamos la distancia horizontal al centro de la pantalla
   
    const x = (clientX - window.innerWidth / 2) / 80;
    setMousePos({ x });
  };


  const sliderRef = useRef(null);

const [isAtStart, setIsAtStart] = useState(true);
const [isAtEnd, setIsAtEnd] = useState(false);

const checkScroll = () => {
  const el = sliderRef.current;

  if (!el) return;

 setIsAtStart(el.scrollLeft <= 5);
  setIsAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 3);
};


const scrollRight = () => {
  const el = sliderRef.current;
  if (!el) return;

  const card = el.children[0];
  const gap = 20;

  el.scrollBy({
    left: card.offsetWidth + gap,
    behavior: "smooth",
  });

  setTimeout(() => {
    checkScroll(); 
  }, 300);
};

const scrollLeft = () => {
  const el = sliderRef.current;
  if (!el) return;

  const card = el.children[0];
  const gap = 20;

  el.scrollBy({
    left: -(card.offsetWidth + gap),
    behavior: "smooth",
  });

  setTimeout(() => {
    checkScroll();
  }, 300);
};

useEffect(() => {
  const el = sliderRef.current;
  if (!el) return;

  checkScroll();

  el.addEventListener("scroll", checkScroll);
  return () => el.removeEventListener("scroll", checkScroll);
}, []);


if (!mounted) {
    return <div className="bg-[#080812] min-h-screen" />; 
  }





  return (
    
    <div 
     className="w-full bg-[#080812] pt-[120px]"
 style={{
  clipPath: "polygon(0 50px, 10% 40px, 20% 30px, 30% 22px, 40% 18px, 50% 16px, 60% 18px, 70% 22px, 80% 30px, 90% 40px, 100% 50px, 100% 100%, 0% 100%)"
}}

 > 
    

      {/* seccion 1 dela seccion black*/}

      <section className="h-full bg-[#080812] text-white py-1 md:py-10 flex flex-col items-center ">
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

      <section className="h-full relative text-white w-full bg-[#080812] overflow-hidden flex flex-col items-center justify-center min-h-screen py-1 md:py-20"
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
    md:text-[40px] md:leading-[0.9] md:tracking-[-0.07em] md:[transform:scaleY(1.3)]
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

        {/* seccion 3 dela seccion black*/}
      
 <section className="h-full bg-[#080812] text-white py-10 md:py-20 flex flex-col gap-14 overflow-hidden">

  <h2 className="
    md:text-[40px] md:leading-[0.9] md:tracking-[-0.07em] md:[transform:scaleY(1.3)]
    text-[32px] leading-[1] tracking-tight
    font-[900] text-white px-6 md:px-29
  ">
    Mucho más que un servicio <br /> de streaming de música
  </h2>

  <div 
    className="relative"
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => {
      setIsHovering(false);
      setActiveCard(null);
    }}
  >

    {/* botones*/}
    <div className="flex md:hidden gap-3 px-6">

     {/* IZQUIERDA */}
<button

  onClick={() => {
      console.log("LEFT CLICK", { isAtStart });
    if (!isAtStart) scrollLeft();
  }}
  className={`
    flex items-center justify-center
    w-10 h-10 rounded-full border border-black
    bg-white text-black
    transition

    ${isAtStart
      ? "opacity-40 cursor-not-allowed hover:bg-white"
      : "hover:bg-gray-200"}
  `}
>
  <GoArrowRight className="rotate-180" />
</button>

{/* DERECHA */}
<button
 
  onClick={() => {
    console.log("RIGHT CLICK", { isAtEnd })
    if (!isAtEnd) scrollRight();
  }}
  className={`
    flex items-center justify-center
    w-10 h-10 rounded-full border border-black
    bg-white text-black
    transition

    ${isAtEnd
      ? "opacity-40 cursor-not-allowed hover:bg-white"
      : "hover:bg-gray-200"}
  `}
>
  <GoArrowRight />
</button>

    </div>

    {/* CARRUSEL */}
    <div
      ref={sliderRef}
      className="
        flex w-[100%] gap-5 md:gap-11
        overflow-x-auto 
        px-6 md:px-0 md:justify-center
        scrollbar-hide
      "
    >

      {/* CARD 1 */}
      <div 
        onMouseEnter={() => setActiveCard(0)}
        className={`
          min-w-[16%] w-[100%] md:w-[18%]
          relative flex flex-col flex-shrink-0
          transition-all duration-300
          ${isHovering && activeCard !== 0 ? "opacity-40" : ""}
        `}
      >

        <h3 className="absolute top-[32px] left-[20px] z-20 text-[15px] font-[900] leading-[0.9] tracking-[-0.07em] [transform:scaleY(1.3)] text-center text-[#121212] pr-4">
          Identifica las <br /> canciones que <br /> suenan a tu alrededor
        </h3>

        <div className="relative w-full h-full">
          <img src="/images/card-deezer3.webp" className="w-full object-cover rounded-[10px]" />

          
        </div>

        {activeCard === 0 && (
          <div className=" w-[300px] flex  py-3 rounded-[10px] md:w-[200px]">
            <button className="w-full bg-white text-black text-[12px] px-4 py-3 md:py-2 rounded-[10px] font-bold">
              Descubre SongCatcher
            </button>
          </div>
        )}

      </div>

      {/* CARD 2 */}
      <div 
        onMouseEnter={() => setActiveCard(1)}
        className={`
          min-w-[16%] w-[100%] md:w-[18%]
          relative flex flex-col flex-shrink-0
          transition-all duration-300
          ${isHovering && activeCard !== 1 ? "opacity-40" : ""}
        `}
      >

        <h3 className="absolute top-[32px] left-[20px] z-20 text-[15px] font-[900] leading-[0.9] tracking-[-0.07em] [transform:scaleY(1.3)] text-center text-[#121212] pr-4">
          Diviértete con nuestros <br /> tests de música
        </h3>

        <div className="relative w-full h-full">
          <img src="/images/card-deezer2.webp" className="w-full object-cover rounded-[10px]" />

         
        </div>

        {activeCard === 1 && (
           <div className=" w-[300px] flex  py-3 rounded-[10px] md:w-[200px]">
            <button className="w-full bg-white text-black text-[12px] px-4 py-3 md:py-2 rounded-[10px] font-bold">
              Descubre Los tests de musica
            </button>
          </div>
        )}

      </div>

      {/* CARD 3 */}
      <div 
        onMouseEnter={() => setActiveCard(2)}
        className={`
          min-w-[16%] w-[100%] md:w-[18%]
          relative flex flex-col flex-shrink-0
          transition-all duration-300
          ${isHovering && activeCard !== 2 ? "opacity-40" : ""}
        `}
      >

        <h3 className="absolute top-[32px] left-[20px] z-20 text-[15px] font-[900] leading-[0.9] tracking-[-0.07em] [transform:scaleY(1.3)] text-center text-[#121212] pr-4">
          Canta a pleno pulmón <br /> siguiendo las letras
        </h3>

        <div className="relative w-full h-full">
          <img src="/images/card-deezer1.webp" className="w-full object-cover rounded-[10px]" />

         
        </div>

        {activeCard === 2 && (
          <div className=" w-[300px] flex  py-3 rounded-[10px] md:w-[200px]">
            <button className="w-full bg-white text-black text-[12px] px-4 py-3 md:py-2 rounded-[10px] font-bold">
              Descubre letras
            </button>
          </div>
        )}

      </div>

    </div>
  </div>
</section>
    </div>
  );
}

