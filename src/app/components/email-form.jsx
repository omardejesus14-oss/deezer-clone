"use client";
import { createClient } from "../utils/supabase/client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavBar from "./nagvar";
import Link from "next/link";
import { GoStop } from "react-icons/go";

export default function RegisterEmail() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const [touched, setTouched] = useState(false);
  const [dirty, setDirty] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato del email
  const router = useRouter();

  useEffect(() => {
    if (!touched) return;
    if (!email) {
      setErrors(" El campo no puede estar vacío");
    } else if (!emailRegex.test(email)) {
      setErrors("El formato de tu dirección de email no es válido");
    } else {
      setErrors("");
    }
  }, [email, touched]);

  const isValid = emailRegex.test(email);
  const isDisabled = dirty && !isValid;

  const handleNext = () => {
    setTouched(true);

    if (!isValid) return;
    // Pasamos el email a la siguiente página por la URL
    router.push(`/password?email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center p-6 bg-[#000000] text-[#fff] font-sans">
      <NavBar />

      <div className="mt-[90px] flex flex-col items-center w-full max-w-[410px] ">
        <h2 className="text-[32px] font-[900] leading-[0.8] tracking-[-0.05em] text-white [transform:scaleY(1.3)] origin-top mb-16">
          Introduce tu dirección de email
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleNext();
          }}
          className="w-full flex flex-col gap-3"
        >
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-semibold text-[#a2a2a2] ml-1">
              Email
            </label>
            <input
              onBlur={() => setTouched(true)}
              className={`w-full bg-[#23232d] border rounded-[8px] h-[38px] px-[16px] text-[13px] text-white focus:outline-none transition-all
                  ${
                    errors
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#23232c]   focus:border-[#a238ff] border-[2px]"
                  }
                  `}
              type="email"
              placeholder="Direccion de email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (!dirty) setDirty(true); // 👈 SOLO para botón
              }}
            />
            {touched && !isValid && (
              <span className="text-red-500 text-[12px] flex gap-2 iten-center">
                <GoStop size={12} /> {errors}
              </span>
            )}
          </div>

          <button
            disabled={isDisabled}
            type="submit"
            className={`text-center w-full h-[38px] rounded-[8px] transition-all ${
              isDisabled
                ? "bg-[#2a2a33] text-gray-400"
                : "bg-[#a238ff] text-white"
            }`}
          >
            continuar
          </button>

          <Link
            href="/password"
            className="text-[16px] hover:bg-[#444] text-white font-bold h-[38px] rounded-[8px] mt-4 transition-all text-[16px] text-center  flex items-center justify-center w-full"
          >
            <span>Iniciar sesión con el número de teléfono</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
