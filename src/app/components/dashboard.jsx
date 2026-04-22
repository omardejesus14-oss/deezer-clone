"use client"

import Sidebar from "./sidebar"
import Player from "./player"
import { songs } from "../../app/songs"
import { use } from "react"

export default function Dashboard() {
  return (
    <div className="h-screen flex flex-col bg-black text-white">

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex flex-1 overflow-hidden">

        {/* SIDEBAR */}
        <aside className="w-64 bg-neutral-900 p-4">
          <Sidebar />
        </aside>

        {/* MAIN */}
        <main className="flex-1 overflow-y-auto p-6">
  <h1 className="text-xl mb-4">Canciones</h1>

  <div className="flex flex-col gap-2">
    {songs.map((song) => (
      <div
        key={song.id}
        onClick={() => setCurrentSong(song)}
        className="flex items-center justify-between p-3 bg-neutral-900 hover:bg-neutral-800 rounded-lg cursor-pointer transition"
      >
        <div>
          <p className="text-sm font-medium">{song.title}</p>
          <p className="text-xs text-gray-400">{song.artist}</p>
        </div>

        <span className="text-xs text-gray-500">3:20</span>
      </div>
    ))}
  </div>
</main>

      </div>

      {/* PLAYER */}
      <div className="h-20 bg-neutral-800 flex items-center justify-center">
        <Player />
      </div>

    </div>
  )
}