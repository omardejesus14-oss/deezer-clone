

export default function Player({ song }) {
  return (
    <div className="h-20 bg-neutral-900 border-t border-neutral-700 flex items-center justify-between px-6">

      {/* Info */}
      <div className="w-1/3">
        {song ? (
          <>
            <p className="text-sm font-medium">{song.title}</p>
            <p className="text-xs text-gray-400">{song.artist}</p>
          </>
        ) : (
          <p className="text-sm text-gray-500">Selecciona una canción</p>
        )}
      </div>

      {/* Controles */}
      <div className="flex items-center gap-6">
        <button>⏮</button>
        <button className="bg-white text-black px-3 py-1 rounded-full">
          ▶
        </button>
        <button>⏭</button>
      </div>

      {/* Volumen */}
      <div className="w-1/3 flex justify-end">
        🔊
      </div>
    </div>
  )
}