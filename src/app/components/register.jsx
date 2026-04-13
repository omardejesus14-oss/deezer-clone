

"use client"
import { createClient } from "../utils/supabase/client" ;  
import { useState } from "react";
import NavBar from "./nagvar";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation"; 
import {SlArrowUp , SlArrowDown } from "react-icons/sl";
import { GoStop } from "react-icons/go";



export default function Register () {

  // Manejo de estados individuales
const [username, setUsername] = useState("");
const [age, setAge] = useState("");
const [gender, setGender] = useState(""); // Identidad
const [errors, setErrors] = useState({username: "", age:  "", gender: ""});


// Hook para obtener datos de la URL de los pasos anteriores
const router = useRouter();
const searchParams = useSearchParams();
const email = searchParams.get("email");
const password = searchParams.get("password");

// handleAgeChange: Funciones para aumentar y disminuir
const incrementarEdad = () => {
  // Si está vacío, empezamos en 1, si no, sumamos 1
  setAge(prev => (prev === "" ? 1 : parseInt(prev) + 1));
};

const decrementarEdad = () => {
  setAge(prev => {
    const current = parseInt(prev);
    // Evitamos que baje de 0
    if (isNaN(current) || current <= 0) return "";
    return current - 1;
  });
};

const supabase = createClient();

// handleSignUp: Función principal de envío
const handleSignUp = async () => { 
  
  let currentErrors = {username: "", age:  "", gender: ""};
  let hasErrors= false

  if (username.trim()===""){
    currentErrors.username = "El campo no puede estar vacío";
    hasErrors = true;
  }


  if (age.trim()===""){
    currentErrors.age = "El campo no puede estar vacío";
    hasErrors = true;
  }

  if (gender.trim()===""){
    currentErrors.gender = "El campo no puede estar vacío";
    hasErrors = true;
  }

  setErrors(currentErrors);

  if (hasErrors) return; // Si hay errores, no continuamos

  try {
    // 1. Registro en la sección de Autenticación
  
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    // Si hay un error en el correo o la clave, nos detenemos aquí
    if (authError) {
  console.error("Error de Auth:", authError.message);

  let mensaje = "";

  if (authError.message.includes("User already registered")) {
    mensaje = "Este correo ya está registrado. Intenta iniciar sesión.";
  } else if (authError.message.includes("Invalid login credentials")) {
    mensaje = "Correo o contraseña incorrectos.";
  } else {
    mensaje = "Error al registrarse. Intenta nuevamente.";
  }

  alert(mensaje);
  return;
}

    // 2. Insertar en la tabla 'profiles'
    // Solo entramos aquí si authData existe y tiene un usuario
    if (authData?.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          { 
            id: authData.user.id, 
            username: username,
            age: parseInt(age) || 0, 
            gender: gender,
            updated_at: new Date()
          }
        ]);

    if (profileError) {
  if (profileError.message.includes("User already registered")) {
    alert("Este correo ya está registrado. Intenta iniciar sesión.");
  } else {
    alert(profileError.message); 
  }
} else {
  alert("Registro exitoso");
  router.push("/login"); 
}
    }
  } catch (error) {
    console.error("Error inesperado:", error);
  }
};



  return(
<div className="min-h-screen bg-black text-white flex flex-col items-center p-6 font-sans">
    <NavBar />
  <div className="w-full max-w-[510px]  mt-[71px]">
    <div className="text-gray-400 text-[16px] mb-4 flex items-center gap-2">
      <Link href="/password"> &lt;</Link> 
      <span className="text-[16px]
      "> Paso 3 de 3</span>
    </div>

    <h2 className="text-[32px] font-[900] leading-[0.8] tracking-[-0.05em] text-white [transform:scaleY(1.3)] origin-top mb-16">
      Introduce tus datos  personales
    </h2>

    <form onSubmit={(e) =>{
      e.preventDefault();
      handleSignUp()
    }} 
      className="flex flex-col gap-3 relative">
      
      {/* Input de Nombre de Usuario */}
      <div className="flex flex-col gap-2 text-[10px]">
        <label className="text-[16px] text-gray-400 font-medium">Nombre de usuario</label>
        <input
            className={`w-full bg-[#23232d] border rounded-[8px] h-[48px] px-[16px] text-[16px] text-white focus:outline-none transition-all
                  ${
                    errors.username
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#23232c]   focus:border-[#a238ff] border-[1px]"
                  }
                  `}
          type="text"
          suppressHydrationWarning={true}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          
        />
        {
          errors.username && (
               <span className="text-red-500 text-[10px] flex gap-2 items-center"> <GoStop size={12}/> {errors.username}</span>
            
          )
        }
     
      </div>

      {/* Input de Edad */}
   <div className="flex flex-col gap-2">
  <label className="text-[16px] text-gray-400 font-medium">Edad</label>
  <div className="relative w-full ">
    <input
      type="number"
      value={age}
      onChange={(e) => setAge(e.target.value)}
      placeholder=""
      suppressHydrationWarning={true}
    
      className={`w-full bg-[#23232d] border rounded-[8px] h-[48px] px-[16px] text-[16px] text-white focus:outline-none appearance-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-all
                  ${
                    errors.age
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#23232c]   focus:border-[#a238ff] border-[1px]"
                  }
                  `}
    />

    <div className="absolute right-0 top-0 h-full flex flex-col justify-center align-items gap-1 border-l-[#444] border-l px-1">
      <button 
        type="button" 
        onClick={incrementarEdad}
        className="text-gray-500 hover:text-white transition-colors flex items-center justify-center"
      >
        <SlArrowUp size={12} />
      </button>
      <button 
        type="button" 
        onClick={decrementarEdad}
        className="text-gray-500 hover:text-white transition-colors flex items-center justify-center"
      >
        <SlArrowDown size={12} />
      </button>
    </div>
       
     
  </div>
  {
          errors.age && (
               <span className="text-red-500 text-[10px] flex gap-2 items-center"> <GoStop size={12}/>{errors.age}</span>
            
          )
        }
</div>

      {/* Selector de Identidad */}
     <div className="flex flex-col gap-2 ">
  <label className="text-[16px] text-gray-400 font-medium">Identidad</label>
  <div className="relative w-full">
    <select
      value={gender}
      onChange={(e) => setGender(e.target.value)}
      suppressHydrationWarning={true}

      className={`w-full bg-[#23232d] border rounded-[8px] h-[48px] px-[16px] text-[16px] text-white focus:outline-none appearance-none cursor-pointer  transition-all text-white flex items-center
                  ${
                    errors.username
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#23232c]   focus:border-[#a238ff] border-[1px]"
                  }
                  `}
    >
      <option value="" disabled hidden>Identidad</option>
      <option value="mujer">Mujer</option>
      <option value="hombre">Hombre</option>
      <option value="no-binario">No binario</option>
    </select>

    {/* Flecha personalizada - El pointer-events-none es la clave */}
    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 ">
      <SlArrowDown size={8} />
    </div>
  </div>
        {
          errors.gender && (
               <span className="text-red-500 text-[10px] flex gap-2 items-center"> <GoStop size={12}/>{errors.gender}</span>
            
          )
        }
     
</div>


       <div className="w-full text-center "> 
          <p className="text-[13px] text-gray-500 " >
        Al hacer clic en "Regístrate gratis", aceptas crear una cuenta y aceptas las{" "}
        <Link href="/terms" className=" <text-[10px] underline cursor-pointer hover:text-[#b35cff]">
          Condiciones generales de uso
        </Link>
        y la{" "}
        <Link href="/privacy"  className=" text-[13px] underline cursor-pointer hover:text-[#b35cff]">
          Política de privacidad
        </Link>
        .
      </p>
       </div>
    

      {/* Botón Final */}
      <button   type="submit"
        className="bg-[#a238ff] text-[16px] hover:bg-[#b35cff] text-white font-bold h-[48px] rounded-[10px] transition-colors  text-center w-full mt-4">
      
      
        Regístrate gratis
      </button>
    </form>
  </div>
</div>
)

}

    


  