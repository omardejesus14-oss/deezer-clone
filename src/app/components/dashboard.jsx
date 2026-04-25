"use client"

import Sidebar from "./sidebar"
import Player from "./player"
import { songs } from "../../app/songs"
import { useState, useEffect } from "react"



export default function Dashboard() {
  const [currentSong, setCurrentSong] = useState(null)
  const [isShuffle, setIsShuffle] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)

useEffect(() => {
  if (songs.length > 0) {
    setCurrentSong(songs[0])
  }
}, [])

const currentIndex = songs.findIndex(s => s.id === currentSong?.id)

const handleNext = () => {
  if (isShuffle) {
    let randomIndex

    do {
      randomIndex = Math.floor(Math.random() * songs.length)
    } while (songs[randomIndex].id === currentSong.id)

    setCurrentSong(songs[randomIndex])
    return
  }

  if (currentIndex < songs.length - 1) {
    setCurrentSong(songs[currentIndex + 1])
  }
}

const handlePrev = () => {
  if (currentIndex > 0) {
    setCurrentSong(songs[currentIndex - 1])
  }
}

  return (
    <div className="h-screen flex flex-col bg-white text-black">

      {/* CONTENIDO */}
      <div className="flex flex-1 overflow-hidden">

        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN */}
        <main className="flex-1 overflow-y-auto p-6 bg-white">
          <h1 className="text-xl mb-4">Canciones</h1>

          <div className="flex flex-col gap-2">
            {songs.map((song) => (
              <div
                key={song.id}
                onClick={() => {
                  console.log("click:", song) // 👈 para debug
                  setCurrentSong(song)
                }}
                className="p-3 bg-neutral-900 hover:bg-neutral-800 rounded-lg cursor-pointer"
              >
                <p>{song.title}</p>
                <p className="text-sm text-gray-400">{song.artist}</p>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* PLAYER */}
      <Player 
      song={currentSong}
  onNext={handleNext}
  onPrev={handlePrev}
  hasNext={currentIndex < songs.length - 1}
  hasPrev={currentIndex > 0}
  isShuffle={isShuffle}
  setIsShuffle={setIsShuffle}
  isRepeat={isRepeat}
  setIsRepeat={setIsRepeat} />
    </div>
  )
}