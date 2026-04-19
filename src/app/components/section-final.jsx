

"use client";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

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
<div className="
  w-full bg-[#080812] text-white py-16 px-6

  [clip-path:polygon(0_12px,10%_15px,20%_17px,30%_19px,40%_21px,50%_22px,60%_21px,70%_19px,80%_17px,90%_15px,100%_12px,100%_100%,0%_100%)]

  md:[clip-path:polygon(0_20px,10%_30px,20%_40px,30%_48px,40%_52px,50%_55px,60%_52px,70%_48px,80%_40px,90%_30px,100%_20px,100%_100%,0%_100%)]
">
      
      <div className="max-w-[900px] mx-auto flex flex-col items-center gap-3 py-15 md:py-25">

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

      </div>

    </div>
  );
}