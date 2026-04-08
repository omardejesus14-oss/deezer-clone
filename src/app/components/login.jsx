"use client";
import { createClient } from "../utils/supabase/client";
import { useState,useEffect} from "react";
import NavBar from "./nagvar";
import Link from "next/link";
import Custom from "./custon";
import { GoStop } from "react-icons/go";

export default function LoginForm() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    if (authError) {
      const timer = setTimeout(() => {
        setAuthError("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [authError]);


  const login = async () => {
    setAuthError("");
    let currentErrors = {
      email: "",
      password: "",
    };

    let hasErrorrs = false;

    if (user.email === "") {
      currentErrors.email = "El campo no puede estar vacío";
      hasErrorrs = true;
    }
    if (user.password === "") {
      currentErrors.password = "El campo no puede estar vacío";
      hasErrorrs = true;
    }

    setErrors(currentErrors);

    if (hasErrorrs) return;

    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.signInWithPassword({
        email: user.email.trim(),
        password: user.password,
      });
     if (error) {
  setAuthError("Tus datos son incorrectos. Vuelve a intentarlo.");
  return;
}

     
      if (data) {
        alert("has iniciado secion correctamente");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#000000] p-6 text-[#fff] font-sans">
      <NavBar />

      <div className="mt-[80px] flex flex-col items-center w-full max-w-[410px] ">
        <h2 className="text-[50px] font-[900] leading-[0.8] tracking-[-0.05em] text-white [transform:scaleY(1.3)] origin-top mb-16">
          Conectarse
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            login();
          }}
          className="w-full flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-semibold text-[#a2a2a2] ml-1">
              Email
            </label>
            <input
              className={`w-full bg-[#23232d] border rounded-[8px] h-[38px] px-[16px] text-[13px] text-white focus:outline-none transition-all
                  ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#23232c]   focus:border-[#a238ff] border-[1px]"
                  }
                  `}
              type="email"
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, email: e.target.value.trim() })
              }
            />

            {errors.email && (
              <span className="flex gap-2 items-center text-red-500 text-[10px]">
                <GoStop size={13} />
                {errors.email}
              </span>
            )}
          </div>

          {/* Contenedor de Contraseña */}
          <div className="flex flex-col gap-2">
            <label className="text-[11px] font-semibold text-[#a2a2a2] ml-1">
              Contraseña
            </label>

            <div className="flex flex-col items-center">
              <Custom
                type="password"
                value={user.password}
                onchange={(value) => {
                  setUser({ ...user, password: value });
                }}
                secure
                error={errors.password}
              />
              <p className="  text-[12px] font-bold text-[#a2a2a2] self-end cursor-pointer hover:underline">
                He olvidado mi contraseña?
              </p>
            </div>

            {errors.password && (
              <span className="flex gap-2 items-center text-red-500 text-[10px]">
                {" "}
                <GoStop size={13} />
                {errors.password}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#a238ff] hover:bg-[#8f20ff] text-white font-bold h-[38px] rounded-[8px] mt-4 transition-all text-[16px] cursor-pointer"
          >
            Iniciar sesión
          </button>

          <div className="flex flex-col items-center gap-6 ">
            <p className="text-[13px] font-bold cursor-pointer hover:underline">
              Iniciar sesión con el número de teléfono
            </p>

            <p className="text-[12px] text-white font-bold">
              ¿Todavía no tienes una cuenta Deezer?{" "}
              <Link className="text-[#a238ff] hover:underline" href="/register">
                Registro
              </Link>
            </p>
           
          </div>
        </form>
        {authError && (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-3 rounded-md shadow-lg flex items-center gap-3 animate-slideUp">
    
    <div className="text-red-500">
      <GoStop size={18} />
    </div>

    <div className="text-[13px]">
      <p className="font-semibold">Error</p>
      <p className="text-gray-600">
        Tus datos son incorrectos. Vuelve a intentarlo.
      </p>
    </div>

  </div>
)}
      </div>
    </div>
  );
}
          
