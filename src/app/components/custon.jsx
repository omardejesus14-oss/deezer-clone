
"use client";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Custom({
  secure,
  onchange,
  placeholder,
  value,
  error,
  isValid,
}) {
  const [mostrar, setMostrar] = useState(false);

  const alternateEyes = () => {
    if (mostrar) {
      return <FaRegEye />;
    } else {
      return <FaRegEyeSlash />;
    }
  };

  const toggleVisibility = () => {
    setMostrar(!mostrar);
  };

  return (
    <div
      className={`w-full flex bg-[#121216] border rounded-[8px] py-[5px] px-[16px] text-white transition-all
        ${
          error
            ? "border-red-500 focus-within:border-red-500"
            : "border-[#23232c] focus-within:border-[#a238ff]"
        }
      `}
    >
      <input
        className="bg-transparent border-none outline-none w-[98%]"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onchange(e.target.value)}
        type={mostrar ? "text" : "password"}
      />

      {secure && (
        <div
          onClick={toggleVisibility}
          className="cursor-pointer text-slate-400 hover:text-indigo-600 transition-colors ml-2"
        >
          {alternateEyes()}
        </div>
      )}
    </div>
  );
}