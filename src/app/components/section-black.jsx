import { IoCheckmarkOutline } from "react-icons/io5";
import Link from "next/link";

export default function BlackWaveSection() {
  return (
    <div className="w-full bg-white">
      {/* 1. Curva Superior (El "hachazo" blanco hacia el negro) */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1100 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:h-[100px]"
        >
          {/* Este path hace la curva inversa (montaña negra) */}
          <path
            d="M0,0 C300,100 900,100 1400,0 L1200,0 L0,0 Z"
            fill="#111111"
            transform="rotate(180 600 60)"
          ></path>
        </svg>
      </div>
      {/* 2. Contenido Negro Central */}
      <section className="bg-[#111111ff] text-white py-10 flex flex-col items-center ">
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


      <section className="relative text-white w-full bg-[#111111ff] overflow-hidden flex flex-col items-center justify-center min-h-screen py-20">
        {" "}
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
             {" "}
          <svg
            viewBox="0 0 1000 400"
            className="w-full max-w-[1000px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            {[...Array(13)].map((_, i) => {
              // Posición horizontal
              const x = 100 + i * 70; // Distancia al centro (para calcular tamaño)

              const center = 6;
              const distance = Math.abs(i - center); // Tamaño dinámico (más grande en el centro)

              const size = 5 + (8 - distance) * 15;

              return (
                <ellipse
                  key={i}
                  cx={x}
                  cy="200"
                  rx={size}
                  ry={size * 1.4}
                  fill="none"
                  stroke="#a238ff"
                  strokeWidth="1.5"
                  opacity="0.6"
                />
              );
            })}
            {" "}
          </svg>
          {" "}
        </div>
        {" "}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          {" "}
          <h2  className="text-[48px] md:text-[40px] font-[900] leading-[0.9] tracking-[-0.07em] mb-12 [transform:scaleY(1.3)]">
            ¿Buscas una canción?
            <br />
            ¡La encontrarás en Deezer con un
            <br /> sonido de alta calidad! {" "}
          </h2>
          {" "}
          <button className=" bg-white text-black px-2 py-1 rounded-[10px] font-bold text-[12px] sm:text-[16px]">
            Explora nuestro catálogo {" "}
          </button>
          {" "}
        </div>
      </section>{" "}
      
    </div>
  );
}
