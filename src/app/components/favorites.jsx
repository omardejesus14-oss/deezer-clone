

"use client";
import { useEffect, useState } from "react";
import { createClient } from "../utils/supabase/client" ;  
import { songs } from "../../app/songs"
import { FaPlay } from "react-icons/fa";



export default function FavoritesPage({ setCurrentSong, setIsPlaying }) {
    const supabase = createClient();
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFavorites() {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { data: favData, error } = await supabase
        .from('favorites')
        .select('song_id')
        .eq('user_id', user.id);

      if (!error && favData) {
        const ids = favData.map(f => f.song_id);
        // Filtramos las canciones de tu archivo local
        const filtered = songs.filter(song => ids.includes(song.id));
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
              onClick={() => { setCurrentSong(song); setIsPlaying(true); }}
            >
              <div className="flex items-center gap-4">
                <img src={song.image} alt={song.title} className="w-12 h-12 rounded shadow" />
                <div>
                  <p className="font-semibold">{song.title}</p>
                  <p className="text-sm text-gray-500">{song.artist}</p>
                </div>
              </div>
              <FaPlay className="opacity-0 group-hover:opacity-100 text-gray-400" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}