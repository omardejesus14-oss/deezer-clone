

export default function Sidebar() {
  return (
    <aside className="w-64 bg-neutral-950 p-4 flex flex-col gap-6">
      
      <h2 className="text-xl font-bold">Deezer</h2>

      <nav className="flex flex-col gap-3 text-sm">
        <a className="hover:text-white text-gray-400" href="#">Inicio</a>
        <a className="hover:text-white text-gray-400" href="#">Buscar</a>
        <a className="hover:text-white text-gray-400" href="#">Favoritos</a>
      </nav>

    </aside>
  )
}