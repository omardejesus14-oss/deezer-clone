

"use client";

import { FaPlay, FaRegHeart, FaHeart} from "react-icons/fa";
import { createClient } from "../utils/supabase/client";
import { useEffect, useState } from "react";

export default function MusicPage({
  songs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
}) {

  
const [favIds, setFavIds] = useState([]); 
const supabase = createClient();


const handleFavorite = async (songId) => {
  const { data: { user } } = await supabase.auth.getUser();
  const isFavorite = favIds.includes(Number(songId));

  if (isFavorite) {
    // Lógica para ELIMINAR de Supabase...
    await supabase.from('favorites').delete().eq('user_id', user.id).eq('song_id', songId);
    
    // ACTUALIZAR ESTADO: Quitamos el ID del array
    setFavIds(prev => prev.filter(id => id !== Number(songId)));
  } else {
    // Lógica para INSERTAR en Supabase...
    await supabase.from('favorites').insert([{ user_id: user.id, song_id: songId }]);
    
    // ACTUALIZAR ESTADO: Añadimos el ID al array
    setFavIds(prev => [...prev, Number(songId)]);
  }
};



// 1. Cargar favoritos al iniciar
// En tu MusicPage.jsx
useEffect(() => {
  let isMounted = true; // Control de montaje

  const fetchFavs = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user || !isMounted) return;

    const { data } = await supabase
      .from('favorites')
      .select('song_id')
      .eq('user_id', user.id);

    if (data && isMounted) {
      setFavIds(data.map(f => Number(f.song_id)));
    }
  };

  fetchFavs();

  return () => { isMounted = false; };


}, []);
  return (
    <main className="flex-1 overflow-y-auto p-6 bg-white">

      {/* TITULO */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black">
          Música
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Descubre tus canciones favoritas
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">

        {songs.map((song) => (
          <div
            key={song.id}
            className="group cursor-pointer"
          >
            {/* CARD */}
            <div
              onClick={() => {
                setCurrentSong(song);
                setIsPlaying(true);
              }}
              className="relative rounded-2xl overflow-hidden bg-gray-100 hover:bg-gray-200 transition"
            >

              {/* IMAGEN */}
              <img
                src={song.image}
                alt={song.title}
                className="w-full aspect-square object-cover hover:brightness-90 transition"
              />

              {/* BOTONES */}
              <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">

                {/* PLAY */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSong(song);
                    setIsPlaying(true);
                  }}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-md hover:bg-gray-100"
                >
                  {currentSong?.id === song.id && isPlaying ? (
                    <div className="flex items-end gap-[2px] h-4">
                      <span className="w-[3px] h-2 bg-black animate-pulse rounded-full"></span>
                      <span className="w-[3px] h-4 bg-black animate-pulse delay-75 rounded-full"></span>
                      <span className="w-[3px] h-3 bg-black animate-pulse delay-150 rounded-full"></span>
                    </div>
                  ) : (
                    <FaPlay size={16} className="ml-[1px]" />
                  )}
                </button>

                {/* FAVORITO */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFavorite(song.id);
                  }}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:text-purple-600 shadow-md hover:bg-gray-100"
                >
                  { favIds.includes(Number(song.id)) ? (
          <FaHeart size={18} className="text-[#a238ff] scale-110 transition-transform" /> // Morado Deezer
        ) : (
          <FaRegHeart size={18} className="text-gray-400 hover:text-[#a238ff]" /> // Gris vacío
        )}
                  {/* <FaRegHeart size={15} /> */}
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
  );
}