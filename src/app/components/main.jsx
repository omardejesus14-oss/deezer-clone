
import { FaPlay, FaRegHeart } from "react-icons/fa";

export default function MainContent({
  songs,
  setCurrentSong,
  currentSong,
  isPlaying,
  setIsPlaying
}) {
  return (
    <main className="flex-1 overflow-y-auto p-2 bg-white">

      <h1 className="text-[48px] font-black mb-6 leading-[0.8] tracking-[-0.06em]  [transform:scaleY(1.5)] origin-top mb-16">
        Todos los canales
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

 

{songs.map((song) => (
  <div
    key={song.id}
    className="group cursor-pointer"
  >
    {/* Imagen */}
    <div
      onClick={() => setCurrentSong(song)}
      className="relative rounded-xl overflow-hidden bg-gray-100 hover:bg-gray-200"
    >
      <img
        src={song.image}
        alt={song.title}
        className="w-full aspect-square object-cover hover:brightness-90 transition"
      />

      {/* BOTONES HOVER */}
      <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">

        {/* PLAY */}
<button
  onClick={(e) => {
    e.stopPropagation();

    setCurrentSong(song);
    setIsPlaying(true);
  }}
  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-md hover:bg-gray-100 transition"
>
  {currentSong?.id === song.id && isPlaying ? (
    <div className="flex items-end gap-[2px] h-4">
      <span className="w-[3px] h-2 bg-black animate-pulse rounded-full"></span>
      <span className="w-[3px] h-4 bg-black animate-pulse delay-75 rounded-full"></span>
      <span className="w-[3px] h-3 bg-black animate-pulse delay-150 rounded-full"></span>
    </div>
  ) : (
    <FaPlay size={13} className="ml-[1px]" />
  )}
</button>

        {/* FAVORITO */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:text-purple-600 shadow-md hover:bg-gray-100"
        >
          <FaRegHeart size={15} />
        </button>

      </div>
    </div>

    {/* TEXTO */}
    <p className="mt-2 text-sm font-semibold truncate">
      {song.title}
    </p>

    <p className="text-xs text-gray-500 truncate">
      {song.artist}
    </p>
  </div>
))}

      </div>

    </main>
  )
}