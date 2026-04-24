"use client";
import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { HiVolumeUp } from "react-icons/hi";

export default function Player({ song, onNext, onPrev, hasNext, hasPrev  }) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const progress = duration ? (currentTime / duration) * 100 : 0;

  // cargar canción
 useEffect(() => {
  if (song && audioRef.current) {
    const wasPlaying = isPlaying

    audioRef.current.src = song.url
    setCurrentTime(0)

    if (wasPlaying) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => console.log("bloqueado"))
    }
  }
}, [song])

  // tiempo
  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    if (audio) {
      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("loadedmetadata", setAudioData);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("loadedmetadata", setAudioData);
      }
    };
  }, []);

  // play / pause
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // mover barra
  const handleSeek = (e) => {
    const value = e.target.value;
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  // formato tiempo
  const formatTime = (time) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="h-24 bg-[#f5f5f7] border-t border-gray-200 flex flex-col justify-center px-6">
      {/* CONTROLES */}
      <div className="flex items-center justify-between">
        {/* INFO */}
        <div className="w-1/3">
          {song ? (
            <>
              <p className="text-sm font-medium text-black">{song.title}</p>
              <p className="text-xs text-gray-500">{song.artist}</p>
            </>
          ) : (
            <p className="text-sm text-gray-400">Selecciona una canción</p>
          )}
        </div>

        {/* BOTONES */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-4">
            {/* ATRÁS */}
     <button
  onClick={onPrev}
  disabled={!hasPrev}
  className={`w-[32px] h-[32px] flex items-center justify-center rounded-full transition
    ${
      hasPrev
        ? "hover:bg-gray-300 text-gray-600"
        : "text-gray-400 cursor-not-allowed"
    }
  `}
>
  <MdSkipPrevious size={26} />
</button>
            {/* PLAY */}
            <button
              onClick={togglePlay}
              className="w-[32px] h-[32px] bg-purple-600 flex items-center justify-center text-white p-2 rounded-full hover:bg-purple-700 transition cursor-pointer"
            >
              {isPlaying ? <FaPause size={13} /> : <FaPlay size={13} />}
            </button>

            {/* SIGUIENTE */}
            <button
  onClick={onNext}
  disabled={!hasNext}
  className={`w-[32px] h-[32px] flex items-center justify-center rounded-full transition
    ${
      hasNext
        ? "hover:bg-gray-300 text-gray-600"
        : "text-gray-400 cursor-not-allowed"
    }
  `}
>
  <MdSkipNext size={26} />
</button>
          </div>

          {/* 🔥 BARRA DE PROGRESO (DEBAJO Y MÁS PEQUEÑA) */}
          <div className="flex items-center gap-2 text-[10px] text-gray-500 w-[310px]">
            <span>{formatTime(currentTime)}</span>

            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              style={{
                background: `linear-gradient(to right, #7c3aed ${progress}%, #d1d5db ${progress}%)`,
              }}
              className="w-full h-[2px] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-[10px]
              [&::-webkit-slider-thumb]:h-[10px]
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-white
              [&::-webkit-slider-thumb]:opacity-0
              [&::-webkit-slider-thumb]:transition
              hover:[&::-webkit-slider-thumb]:opacity-100"
            />

            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* VOLUMEN */}
        <div className="w-1/3 flex justify-end text-gray-500">
          <HiVolumeUp size={20} />
        </div>
      </div>

      <audio ref={audioRef} />
    </div>
  );
}
