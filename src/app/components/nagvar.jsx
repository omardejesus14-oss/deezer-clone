"use client";
import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi"; 
import { IoCloseOutline } from "react-icons/io5"; // Icono más parecido al original

export default function NavBar({ variant = "simple" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`w-full h-[64px] md:h-[78px] bg-[#000f] flex  absolute top-0 left-0 z-50 
      ${
        variant === "full"
          ? "md:border-b md:border-white"
          : "md:border-b md:border-[#23232c]"
      }
      `}
    >
      <div className="w-[89%]  max-w-[1200px] mx-auto flex items-center justify-between px-0 md:px-6">
        
        {/* LOGO */}
        <Link href="/">
          <img
            src="/images/logodezer.png"
            alt="Deezer Logo"
            className="w-[185px] md:w-[160px] ml-[-10px] md:ml-0 object-contain cursor-pointer"
          />
        </Link>

        {variant === "full" && (
          <>
            {/* DESKTOP */}
            <div className="hidden md:flex items-center gap-14">
              <div className="flex gap-4 text-white text-[16px]">
                <span className="cursor-pointer hover:text-[#a238ff]">Ofertas</span>
                <span className="cursor-pointer hover:text-[#a238ff]">Características</span>
                <span className="cursor-pointer hover:text-[#a238ff]">Música</span>
              </div>

              <div className="flex gap-8">
                <Link href="/login">
                  <button className="border border-[#3a3a44] text-white px-5 py-2 md:text-[14px] cursor-pointer hover:bg-[#444] rounded-md">
                    Iniciar sesión
                  </button>
                </Link>
                <Link href="/email"> 
  <button className="bg-[#c438ff] text-white font-bold rounded-md px-4 py-2 text-[14px]">
  Registrarse
</button>
</Link>
              </div>
            </div>

            {/* MOBILE ICON */}
            <div className="flex items-center gap-3 md:hidden">
              <Link href="/email">
                <button className="bg-[#a238ff] text-white px-6 py-2 text-[14px] rounded-md font-bold">
                  Registrarse
                </button>
              </Link>
              <div 
                className="text-white text-3xl cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <HiOutlineMenu  size={37}/>
              </div>
            </div>

            {/* MENU MOVIL (EL DE LA IMAGEN) */}
            {isOpen && (
              <div className="fixed inset-0 bg-[#000000] z-[100] flex flex-col gap-8">
                {/* Header del menú */}
                <div className="w-[93%] h-[64px] flex items-center justify-between px-0">
                  <img
                    src="/images/logodezer.png"
                    alt="Deezer Logo"
                    className="w-[165px] ml-[-10px] object-contain"
                  />
                  <div 
                    className="text-white text-4xl cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <IoCloseOutline />
                  </div>
                </div>

                {/* Links centrados */}
                <div className="flex flex-col items-center  flex-1 gap-6 text-white font-bold text-[18px]">
                  <Link href="/login" onClick={() => setIsOpen(false)}>Iniciar sesión</Link>
                  <Link href="/email" onClick={() => setIsOpen(false)}>Registrarse</Link>
                  <span className="cursor-pointer">Ofertas</span>
                  <span className="cursor-pointer">Explorar los canales</span>
                  <span className="cursor-pointer">Características</span>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
}