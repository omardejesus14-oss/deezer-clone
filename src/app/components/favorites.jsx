"use client";

import { useEffect, useState } from "react";
import { createClient } from "../utils/supabase/client";
import { songs } from "../../app/songs";
import { FaPlay, FaHeart } from "react-icons/fa";

export default function FavoritesPage({
  setCurrentSong,
  setIsPlaying,
  currentSong,
  isPlaying,
}) {
  const supabase = createClient();
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favIds, setFavIds] = useState([]); // Para controlar favoritos en esta página

  const handleFavorite = async (songId, isFavoritesPage = false) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    const isFavorite = favIds.includes(Number(songId));

    if (isFavorite) {
      await supabase
        .from("favorites")
        .delete()
        .eq("user_id", user.id)
        .eq("song_id", songId);

      setFavIds((prev) => prev.filter((id) => id !== Number(songId)));

      if (isFavoritesPage) {
        // Usando tu estado correcto
        setFavoriteSongs((prev) => prev.filter((song) => song.id !== songId));
      }
    } else {
      await supabase
        .from("favorites")
        .insert([{ user_id: user.id, song_id: songId }]);

      setFavIds((prev) => [...prev, Number(songId)]);
    }
  };

  useEffect(() => {
    async function loadFavorites() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { data: favData, error } = await supabase
        .from("favorites")
        .select("song_id")
        .eq("user_id", user.id);

      if (!error && favData) {
        const ids = favData.map((f) => f.song_id);
        // Filtramos las canciones de tu archivo local
        const filtered = songs.filter((song) => ids.includes(song.id));
        setFavoriteSongs(filtered);
      }
      setLoading(false);
    }
    loadFavorites();
  }, []);

  if (loading) return <p className="p-6">Cargando tus favoritos...</p>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Mis Favoritos</h2>
      {favoriteSongs.length === 0 ? (
        <p className="text-gray-500">Aún no tienes canciones favoritas.</p>
      ) : (
        <div className="flex flex-col gap-2">
          {favoriteSongs.map((song) => (
            <div
              key={song.id}
              className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg cursor-pointer group transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={song.image}
                  alt={song.title}
                  className="w-12 h-12 rounded shadow"
                />
                <div>
                  <p className="font-semibold">{song.title}</p>
                  <p className="text-sm text-gray-500">{song.artist}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 ml-4">
                {/* PLAY */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSong(song);
                    setIsPlaying(true);
                  }}
                  className="w-10 h-10 cursor-pointer rounded-full bg-white flex items-center justify-center text-black shadow-md hover:bg-gray-100" >
                  {Number(currentSong?.id) === Number(song.id) && isPlaying ? (
                    <div className="flex items-end gap-[2px] h-4">
                      <span className="w-[3px] h-2 bg-black animate-pulse rounded-full"></span>
                      <span className="w-[3px] h-4 bg-black animate-pulse delay-75 rounded-full"></span>
                      <span className="w-[3px] h-3 bg-black animate-pulse delay-150 rounded-full"></span>
                    </div>
                  ) : (
                    <FaPlay size={16} className="ml-[1px]" />
                  )}
                </button>

                {/* FAVORITOS */}
                <button
                  onClick={async (e) => {
                    e.stopPropagation();

                    // Llamamos a la lógica de base de datos
                    await handleFavorite(song.id, true);

                    // Corregimos el nombre del estado aquí también por si acaso
                    setFavoriteSongs((prev) =>
                      prev.filter((s) => s.id !== song.id),
                    );
                  }}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-sm border border-gray-100 hover:scale-105 transition-transform cursor-pointer"
                >
                  <FaHeart size={18} className="text-[#a238ff]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
