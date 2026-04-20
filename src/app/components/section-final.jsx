

"use client";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import Link from "next/link";

const faqs = [
  {
    question: "¿Cuáles son las ventajas de una suscripción Deezer Premium?",
    answer:
      "Puedes elegir lo que quieres escuchar en cualquier momento, sin interrupciones por publicidad, y saltarte tantas canciones como desees. También puedes disfrutar de la reproducción sin conexión en la aplicación Deezer.",
  },
  {
    question: "¿Qué significa la reproducción sin conexión?",
    answer:
      "La reproducción sin conexión significa que puedes descargarte tus playlists y canciones favoritas, por lo que podrás escuchar música sin necesidad de una conexión wifi o a internet.",
  },
  {
    question: "¿Cuántos dispositivos pueden emparejarse con una cuenta Deezer Premium?",
    answer:
      "Puedes conectar hasta 3 dispositivos diferentes a tu aplicación de música.",
  },
  {
    question:
      "¿Qué diferencia hay entre una cuenta Deezer Premium y una cuenta Deezer Family?",
    answer:
      "Con Deezer Premium, tienes una cuenta y puedes conectar hasta 3 dispositivos diferentes. Deezer Family te permite crear hasta 6 miembros diferentes en una misma cuenta para que cada persona pueda crear su propia colección y recibir sus propias recomendaciones personales.",
  },

  {
     question:
      "Me he pasado a Deezer Premium. ¿Por qué mi cuenta aparece todavía como Deezer Free",
    answer:
      "Si te has pasado a otro plan, tu cuenta puede seguir apareciendo como Deezer Free si todavía no se ha abonado el pago o si estás iniciando sesión a otra cuenta de Deezer. Comprueba que tus datos son los correctos.",

  },
];

export default function SectionFinal() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
<div className="w-full bg-[#080812] text-white py-16  [clip-path:polygon(0_12px,10%_15px,20%_17px,30%_19px,40%_21px,50%_22px,60%_21px,70%_19px,80%_17px,90%_15px,100%_12px,100%_100%,0%_100%)] md:[clip-path:polygon(0_20px,10%_30px,20%_40px,30%_48px,40%_52px,50%_55px,60%_52px,70%_48px,80%_40px,90%_30px,100%_20px,100%_100%,0%_100%)]">
      
      <div className="max-w-[900px] w-[90%] mx-auto flex flex-col items-center gap-3 py-15 md:py-25 ">

         <h2 className="text-[35px] text-center md:text-[50px] font-black leading-[0.8] tracking-[-0.10em] [transform:scaleY(1.3)] inline-block mb-7 ">
      Preguntas frecuentes
    </h2>

        {faqs.map((item, index) => (
          <div key={index} className=" w-full md:w-[90%] pb-4"  >

            {/* PREGUNTA */}
           <button
  onClick={() => toggle(index)}
  className="w-full flex items-center gap-4 text-left cursor-pointer"
>
  <h3 className="flex-1 text-[18px] md:text-[18px] font-bold">
    {item.question}
  </h3>

  <IoChevronDown
    className={`text-xl transition-transform duration-300 ${
      openIndex === index ? "rotate-180" : ""
    }`}
  />
</button>

            {/* RESPUESTA */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-[200px] mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-400 text-[16px] md:text-[14px]">
                {item.answer}
              </p>
            </div>

          </div>
        ))}
        

        <div className="w-full md:w-[90%] mt-30 flex flex-col gap-1 items-center ">

          <p className="text-[16px] md:text-[13px] text-center text-gray-400 leading-6">
            Esta oferta incluye una prueba gratis de 1 mes del servicio Deezer Premium. Una vez finalizado tu periodo de prueba gratuito, pasarás automáticamente a una suscripción Deezer Premium al precio completo de Col$19.500 al mes, excepto si cancelas tu suscripción al menos 48 horas antes de la fecha de renovación automática. Oferta sin compromiso. Podrás cancelar tu suscripción en cualquier momento. Esta oferta solo está disponible para los usuarios que nunca se hayan beneficiado de un periodo de prueba gratuito, ni de ninguna promoción Deezer, y/o que no tienen actualmente, ni hayan tenido nunca, una suscripción a una oferta de pago de Deezer. Esta oferta solo es válida una vez por usuario. Esta oferta no es acumulable con ninguna otra oferta. Para canjear esta oferta tienes que introducir información de pago válida, iniciar sesión o crear una cuenta y aceptar todas las condiciones de uso del servicio de Deezer (disponibles en </p> <Link href="https://www.deezer.com/legal/cgu"> <span className="text-[16px] md:text-[13px]" >https://www.deezer.com/legal/cgu).</span></Link>



        </div>

       
      </div>
       <hr className="w-full border-t border-gray-400/50 " />


      <div className="w-full bg-[#080812] flex justify-center py-4 "> 

    <div className="w-[85%]  text-white px-6 py-12 flex flex-col items-center ">

  {/* BOTONES */}
  <div className="flex gap-4 mb-12">
    <div className="w-[120px]   flex items-center gap-2">
      <img className="w-full " src="https://cdn-assets.dzcdn.net/common/images/apple-store-badge/es-es.svg" alt="" />
    </div>

    <div className="w-[130px]  flex items-center gap-2">
   <img className="w-full " src="https://cdn-assets.dzcdn.net/common/images/play-store-badge/es-es.svg" alt="" />
      
    </div>
  </div>

  {/* COLUMNAS */}
 <div className="flex flex-col md:flex-row md:flex-wrap gap-6 text-sm">

  {/* 1 */}
  <ul className="flex flex-col gap-2 md:w-[18%]">
    <li className="text-white font-semibold mb-2">Enlaces útiles</li>
    <li className="text-gray-400">Descarga la aplicación de Deezer</li>
    <li className="text-gray-400">Ofertas</li>
    <li className="text-gray-400">Reseñas</li>
    <li className="text-gray-400">Usa un código promocional</li>
    <li className="text-gray-400">Compra una tarjeta regalo</li>
    <li className="text-gray-400">Preguntas frecuentes</li>
    <li className="text-gray-400">Contacta con Deezer</li>
    <li className="text-gray-400">Estado actual</li>
  </ul>

  {/* 2 */}
  <ul className="flex flex-col gap-2 md:w-[18%]">
    <li className="text-white font-semibold mb-2">Características</li>
    <li className="text-gray-400">Flow</li>
    <li className="text-gray-400">Identificador de canciones</li>
    <li className="text-gray-400">Transfiere tu música</li>
    <li className="text-gray-400">Escucha con letras</li>
    <li className="text-gray-400">Modo sin conexión</li>
    <li className="text-gray-400">Calidad de sonido HiFi</li>
    <li className="text-gray-400">Playlists compartidas</li>
    <li className="text-gray-400">Jugar a test de música</li>
    <li className="text-gray-400">Dispositivos compatibles</li>
  </ul>

  {/* 3 */}
  <ul className="flex flex-col gap-2 md:w-[18%]">
    <li className="text-white font-semibold mb-2">Live the Music</li>
    <li className="text-gray-400">Explorar el catálogo</li>
    <li className="text-gray-400">Canciones top</li>
    <li className="text-gray-400">Nuevos lanzamientos</li>
    <li className="text-gray-400">The Backstage: el blog de Deezer</li>
    <li className="text-gray-400">Deezer Community</li>
    <li className="text-gray-400">Deezer Club</li>
  </ul>

  {/* 4 */}
  <ul className="flex flex-col gap-2 md:w-[18%]">
    <li className="text-white font-semibold mb-2">Quiénes somos</li>
    <li className="text-gray-400">Prensa y noticias</li>
    <li className="text-gray-400">Sistema de Pagos Centrado en el Artista (ACPS)</li>
    <li className="text-gray-400">Deezer for business</li>
    <li className="text-gray-400">Deezer for Creators</li>
    <li className="text-gray-400">Deezer for Developers</li>
    <li className="text-gray-400">Inversores</li>
    <li className="text-gray-400">Advertise on Deezer</li>
    <li className="text-gray-400">Deezer for professionals</li>
    <li className="text-gray-400">Ofertas de empleo</li>
  </ul>

  {/* 5 */}
  <ul className="flex flex-col gap-2 md:w-[18%]">
    <li className="text-white font-semibold mb-2">Legal</li>
    <li className="text-gray-400">Condiciones generales de uso</li>
    <li className="text-gray-400">Política de privacidad</li>
    <li className="text-gray-400">Cookies</li>
    <li className="text-gray-400">Informe de software de código abierto</li>
    <li className="text-gray-400">Política de divulgación de vulnerabilidades</li>
    <li className="text-gray-400">Accesibilidad</li>
  </ul>

</div>

</div>



      </div>

      <div className="w-full bg-[#000f] flex justify-between py-4 px-10 ">

        <div className="flex gap-1">
          <Link href={"https://www.facebook.com/Deezer"}>icon1</Link>
          <Link href={"https://www.facebook.com/Deezer"}>icon2</Link>
          <Link href={"https://www.facebook.com/Deezer"}>icon3</Link>
          <Link href={"https://www.facebook.com/Deezer"}>icon4</Link>
        </div>

        <div>
        <Link href="/">
         <img className="w-[150px]" src="/images/logodezer.png" alt="" />
        </Link>
         
        </div>

        <div>
          <Link href="/"> <h4>© 2026 Deezer
            Español</h4>
          </Link>
         
        </div>



      </div>
 

    </div>
  );
} 