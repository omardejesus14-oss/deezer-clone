"use client"
import { createClient } from "../utils/supabase/client" ;
import { useState } from "react";
import NavBar from "./nagvar";
import Link from "next/link";


export default function LoginForm(){

    const [user, setUser] = useState({
        email:"",
        password:""
    });

    const login = async ()=>{
        console.log({email: user.email, password:  user.password});

        try {

        const supabase=createClient();
        const { data,error} = await supabase.auth.signInWithPassword({
            email:user.email.trim(),
            password:user.password
        })
        if(error)throw error;
        if(data){
            alert("has iniciado secion correctamente");
        }
        
    } catch (error) {
        console.error(error)
        
    }



    }
    
     
    

    return(
<div className="w-full min-h-screen flex flex-col items-center bg-[#000000] text-[#fff] font-sans">
  <NavBar />

  <div className="mt-[80px] flex flex-col items-center w-full max-w-[410px] ">
    
    <h2 className="text-[50px] font-[900] leading-[0.8] tracking-[-0.05em] text-white [transform:scaleY(1.3)] origin-top mb-16">
      Conectarse
    </h2>

    <form 
      onSubmit={(e) => { e.preventDefault(); login(); }} 
      className="w-full flex flex-col gap-4"
    >
     
      <div className="flex flex-col gap-2">
        <label className="text-[14px] font-semibold text-[#a2a2a2] ml-1">
          Email
        </label>
        <input 
          className="w-full bg-[#121216] border border-[#23232c] rounded-[8px] py-[5px] px-[16px] text-[16px] text-white focus:outline-none focus:border-[#a238ff] transition-all"
          type="email"
          value={user.email}
          onChange={(e) => setUser({...user, email: e.target.value.trim()})} 
        />
      </div>

      {/* Contenedor de Contraseña */}
      <div className="flex flex-col gap-2">
        <label className="text-[14px] font-semibold text-[#a2a2a2] ml-1">
          Contraseña
        </label>
        <div className="relative">
          <input 
            className="w-full bg-[#121216] border border-[#23232c] rounded-[8px] py-[5px] px-[16px] text-[16px] text-white focus:outline-none focus:border-[#a238ff] transition-all"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value.trim()})}
          />
        
          <span className="absolute right-4 top-2 text-gray-400 cursor-pointer text-sm">👁</span>
        </div>
      </div>

      <p className=" absolute top-[335px] left-[560px] text-[14px] font-bold text-[#a2a2a2] self-end cursor-pointer hover:underline">
        He olvidado mi contraseña?
      </p>

    
      <button 
        type="submit"
        className="w-full bg-[#a238ff] hover:bg-[#8f20ff] text-white font-bold h-[38px] rounded-[8px] mt-4 transition-all text-[16px]"
      >
        Iniciar sesión
      </button>

      <div className="flex flex-col items-center gap-6 mt-6">
        <p className="text-[16px] font-bold cursor-pointer hover:underline">
          Iniciar sesión con el número de teléfono
        </p>

        <p className="text-[14px] text-white font-bold">
          ¿Todavía no tienes una cuenta Deezer?{" "}
          <Link className="text-[#a238ff] hover:underline" href="/register"> 
             Registro
          </Link>
        </p>
      </div>
    </form>
  </div>
</div>

    )
}