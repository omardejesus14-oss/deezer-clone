

import { HiHome , HiHeart} from "react-icons/hi"
import { FiSearch, FiPlus  } from "react-icons/fi"
import { MdLibraryMusic } from "react-icons/md"



export default function Sidebar() {
  return (
    <div className="w-[250px] h-screen bg-gray-100 flex flex-col justify-between border-r border-gray-400">

      {/* TOP */}
      <div className="p-4">

        {/* LOGO */}
    <img src="/icon.svg" alt="icono" className="w-28 h-5" />
          
        

        {/* MENU */}
        <nav className="flex flex-col gap-4 text-sm mt-8">

          {/* ACTIVO */}
          <button className="flex items-center gap-3  rounded-lg hover:bg-gray-200 text-black font-bold ">
            <HiHome size={26} />
            Inicio
          </button>

          <button className="flex items-center gap-3   rounded-lg hover:bg-gray-200 text-black font-bold">
            <FiSearch size={26} />
            Explorar
          </button>

          <button className="flex items-center gap-3   rounded-lg hover:bg-gray-200 text-black font-bold">
            <MdLibraryMusic size={26} />
            Biblioteca
          </button>

        </nav>

        {/* CARD MORADA */}
        <div className="mt-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-5 px-4 rounded-[3px]">
          <p className="text-sm mb-5 leading-none">
            Suscríbete y sáltate grati los anuncios durante 1 mes.
          </p>
          <button className="bg-purple-900 text-white border-white border text-[12px] px-4 py-1 rounded-[5px] font-medium">
            Probar ahora
          </button>
        </div>
       <hr className="-mx-4 border-gray-300 my-4" />

        {/* PLAYLISTS */}
        <div >

          <p className="text-[16px] text-black mb-2 px-1 font-bold">Playlists</p>

          <button className="flex items-center gap-1 px-1  py-2 rounded-lg hover:bg-gray-200  hover:w-[200px]  text-[15px]">
          
            <img className="w-[45px]" src="https://cdn-images.dzcdn.net/images/cover/309913a32b70ad008c4e956d39e77fe3/100x100-000000-80-0-0.jpg" alt="" />
            Canciones favoritas
          </button>

          <button className="flex items-center gap-1 px-1  py-2 rounded-lg hover:bg-gray-200 hover:w-[200px] text-[15px]">
             <div className="w-[45px] h-[40px] bg-gray-300 flex items-center justify-center ">
               <FiPlus size={26} />
             </div>
            Crear una playlist
          </button>

        </div>

      </div>

    </div>
  )
}