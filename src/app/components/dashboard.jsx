"use client"

import Sidebar from "./sidebar"
import Player from "./player"
import { songs } from "../../app/songs"
import { useState, useEffect } from "react"
import TopBar from "./topbar"
import { createClient } from "../utils/supabase/client";
import MainContent from "./main"



export default function Dashboard() {
  const [currentSong, setCurrentSong] = useState(null)
  const [isShuffle, setIsShuffle] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false);

  const [user, setUser] = useState(null)
  const supabase = createClient();

useEffect(() => {
  const getUser = async () => {
    const { data } = await supabase.auth.getUser()
    setUser(data.user)
  }

  getUser()
}, [])

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
  <div className="h-screen flex flex-col bg-gray-100 text-black">

  {/* CONTENIDO SUPERIOR */}
  <div className="flex flex-1 overflow-hidden">

    {/* SIDEBAR */}
    <Sidebar />

    {/* ZONA DERECHA */}
    <div className="flex-1 flex flex-col overflow-hidden">

      {/* TOPBAR */}
    <TopBar user={user} />

      {/* MAIN */}
      <main className="flex-1 overflow-y-auto p-6 bg-white">
       <MainContent 
        songs={songs}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        isPlaying={isPlaying}
         setIsPlaying={setIsPlaying}
        />
      </main>

    </div>
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
    setIsRepeat={setIsRepeat}
    isPlaying={isPlaying}
    setIsPlaying={setIsPlaying}
  />

</div>
  )
}