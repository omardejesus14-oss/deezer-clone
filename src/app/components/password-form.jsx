"use client";

import { useState, useEffect } from "react";
import NavBar from "./nagvar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Custom from "./custon";
import { GoIssueClosed, GoStop } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

export default function RegisterPassword( {email}) {
  const [errors, setErrors] = useState([]);
  const [strength, setStrength] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dirty, setDirty] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);
  

  useEffect(() => {
    //varibles para vañidar las contraceñas

    const metrics = {
      hasLength: password.length >= 8,
      hasLower: /[a-z]/.test(password),
      hasUpper: /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    //si pasa todas las validaciones
    const passedCount = Object.values(metrics).filter(Boolean).length;

    // valida la fuerza de la contraseña

    if (password.length === 0) {
      setStrength(""); // Estado vacío si no hay texto
    } else if (passedCount <= 2) {
      setStrength("Poco segura");
    } else if (passedCount === 3) {
      setStrength("Débil");
    } else if (passedCount === 4) {
      setStrength("Media");
    } else if (passedCount === 5) {
      setStrength("Segura");
    }

    // Solo validamos errores si ya fue tocado
    if (!touched) return;

    //si no hay contraceña muestro el error;

    if (!password) {
      setErrors(["El campo no puede estar vacío"]);
      return;
    }

    //validaciones de la contarseña

    if (!metrics.hasLength) {
      setErrors(["Debe tener al menos 8 caracteres"]);
      return;
    }

   if (!metrics.hasLower || !metrics.hasUpper && !metrics.hasNumber) {
  setErrors(["Contraseña poco segura"]);
  return;
}

    setErrors([]);
  }, [password, touched]);

  if (!mounted) return null;

  const isValid =
    password.length >= 8 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
     const isDisabled = dirty && !isValid;

  const handleNext = () => {
    // Pasamos el email a la siguiente página por la URL
    router.push(
      `/register?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
    );
  };

  const strengthColors = {
    "Poco segura": "text-red-500",
    Débil: "text-red-500",
    Media: "text-yellow-500",
    Segura: "text-green-500",
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center p-6 bg-[#000000] text-[#fff] font-sans">
      <NavBar />

      <div className="mt-[96px] flex flex-col  w-full max-w-[410px]  ">
        <div className="text-[11px] mb-3 flex items-center ">
          <Link className="flex gap-1 items-center text-gray-400" href="/email"> <GoChevronLeft size={22} /> Paso 2 de 3</Link>
         
        </div>

        <h2 className="text-[32px] font-[900] leading-[0.8] tracking-[-0.05em] text-white [transform:scaleY(1.3)] origin-top mb-13">
          Crear una contraseña
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleNext();
          }}
          className="w-full flex flex-col gap-3 "
        >
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-semibold text-[#a2a2a2] ml-1">
              Contraseña
            </label>
            <Custom
              onBlur={() => setTouched(true)}
              value={password}
               onchange={(value) => {setPassword(value);
                if (!dirty) setDirty(true); 
              }}
              secure
                error={touched && errors.length > 0}
                isValid={touched && isValid} 
            
            />

            {/* Mostrar los requisitos de la contraseña */}

            {password.length > 0 &&(
              <div className="  bg-[#1a1a22] p-3 rounded-md text-[12px] flex justify-between items-start">
                <div className="bg-[#1a1a22] ">
                  <p className="mb-2 text-white">Tu contraseña debe incluir:</p>

                  <p
                    className={
                      password.length >= 8
                        ? "text-green-500 flex  gap-2"
                        : "text-gray-400 flex  gap-2"
                    }
                  >
                    <GoIssueClosed />8 caracteres
                  </p>

                  <p
                    className={
                      /[a-zA-Z]/.test(password)
                        ? "text-green-500 flex  gap-2"
                        : "text-gray-400 flex  gap-2"
                    }
                  >
                    <GoIssueClosed />
                    Una letra
                  </p>

                  <p
                    className={
                      /[0-9]/.test(password)
                        ? "text-green-500 flex items-center gap-2"
                        : "flex text-gray-400 flex items-center gap-2"
                    }
                  >
                    <GoIssueClosed />
                    Un número
                  </p>
                </div>
                <p
                  className={`mt-2 text-[12px] font-semibold ${strengthColors[strength] || "text-gray-400"}`}
                >
                  {strength}
                </p>
              </div>
            )}
          </div>
          {touched && errors.length > 0 && (
            <div className=" space-y-1">
              {errors.map((error, i) => (
                <span
                  key={i}
                  className="text-red-500 text-[12px] flex items-center gap-2"
                >
                  <GoStop size={13} /> {error}
                </span>
              ))}
            </div>
          )}

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
        </form>
      </div>
    </div>
  );
}
