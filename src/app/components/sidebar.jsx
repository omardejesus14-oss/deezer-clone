

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#f5f5f7] border-r border-gray-200 p-6">
      
      <h2 className="text-xl font-bold">Deezer</h2>

      <nav className="flex flex-col gap-3 text-sm">
        <a className="hover:text-white text-gray-400" href="#">Inicio</a>
        <a className="hover:text-white text-gray-400" href="#">Buscar</a>
        <a className="hover:text-white text-gray-400" href="#">Favoritos</a>
      </nav>

    </aside>
  )
}