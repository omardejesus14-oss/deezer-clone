

import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";

export default function TopBar( { user } ) {

    const name =
    user?.user_metadata?.name ||
    user?.user_metadata?.full_name ||
    user?.email ||
    "U"

  const initial = name.charAt(0).toUpperCase()

  return (
    <div className="h-[70px] bg-white border-b border-gray-200 px-6 flex items-center justify-between">

      {/* IZQUIERDA - BUSCADOR */}
      <div className="w-full max-w-[350px] relative">

        <input
          type="text"
          placeholder="Artistas, canciones, podcasts... "
          className="placeholder:text-gray-400 w-full bg-gray-200 rounded-[10px] py-3 pl-10  text-sm outline-none focus:ring-2 focus:ring-purple-500"
        />

        <FiSearch
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />

      </div>

      {/* DERECHA */}
      <div className="flex items-center gap-2">

        {/* CAMPANA */}
        <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600 transition">
          <IoNotificationsOutline size={18} />
        </button>

        {/* USER */}
        <button className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
        <span className="text-sm text-gray-700">
          {initial}
        </span>
      </button>

      </div>

    </div>
  );
}