"use client"

import Sidebar from "./sidebar"
import Player from "./player"
import { songs } from "../../app/songs"
import { useState, useEffect } from "react"
import TopBar from "./topbar"
import { createClient } from "../utils/supabase/client";
import MainContent from "./main"
import MusicPage from "./music"
import { HiMenuAlt2, HiX } from "react-icons/hi";



export default function Dashboard() {
  const [currentSong, setCurrentSong] = useState(null)
  const [isShuffle, setIsShuffle] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false);
  const [view, setView] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  <div className="h-screen flex flex-col bg-gray-100 text-black overflow-hidden relative">
      
      {/* 1. CONTENIDO SUPERIOR (Sidebar + Main) */}
      <div className="flex flex-1 overflow-hidden">

        {/* SIDEBAR MÓVIL */}
        <aside className={`
          fixed inset-y-0 left-0 z-[100] w-64 bg-gray-100 transform transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0 
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
          <div className="p-4 flex  items-center md:hidden border-b border-gray-200">
           
            <button className="absolute top-2 right-4 text-gray-600" onClick={() => setIsMenuOpen(false)}><HiX size={24} /></button>
          </div>
          <Sidebar /> 
        </aside>

        {/* OVERLAY */}
        {isMenuOpen && (
          <div 
            className="inset-0 bg-gray-100 z-[90] md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* ZONA DERECHA */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-white">
          
          {/* TOPBAR */}
          <TopBar user={user} />

          {/* BOTÓN HAMBURGUESA*/}
          <div className="md:hidden px-6 py-2 bg-white  flex items-center">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 text-gray-600 font-medium"
            >
              <HiMenuAlt2 size={24} />
              <span className="text-sm">Menú</span>
            </button>
          </div>

          {/* MAIN CONTENT */}
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            {view === "home" && <MainContent setView={setView} />}
            {view === "music" && (
              <MusicPage 
                songs={songs}
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
              />
            )}
          </main>
        </div>
      </div>

      {/* 2. PLAYER RESPONSIVO FIJO ABAJO */}
      <footer className="w-full bg-white border-t border-gray-200 z-[110]">
        <Player
          song={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          onNext={handleNext}
          onPrev={handlePrev}
          // ... resto de props
        />
      </footer>
    </div>
  )
}