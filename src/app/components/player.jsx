"use client";
import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { LuShuffle, LuRepeat } from "react-icons/lu";
import { MdCast } from "react-icons/md";
import { LuListMusic, LuSlidersHorizontal } from "react-icons/lu";

export default function Player({
  song,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
  isShuffle,
  setIsShuffle,
  isRepeat,
  setIsRepeat,
  isPlaying,
  setIsPlaying,
}) {
  const audioRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(0.7);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (song && audioRef.current) {
      audioRef.current.src = song.url;
      audioRef.current.load();

      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [song]);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const progress = duration ? (currentTime / duration) * 100 : 0;
  const volumePercent = volume * 100;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleVolume = (e) => {
    const value = Number(e.target.value);

    setVolume(value);

    if (value === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
      setPrevVolume(value);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);
  const toggleMute = () => {
    if (!isMuted) {
      setPrevVolume(volume); // guarda
      setVolume(0); // barra baja a 0
      setIsMuted(true);
    } else {
      setVolume(prevVolume); // recupera
      setIsMuted(false);
    }
  };

  // cargar canción
  useEffect(() => {
    if (song && audioRef.current) {
      const wasPlaying = isPlaying;

      audioRef.current.src = song.url;
      setCurrentTime(0);

      if (wasPlaying) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => console.log("bloqueado"));
      }
    }
  }, [song]);

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

  // cuando termina la canción
  useEffect(() => {
    const audio = audioRef.current;

    const handleEnd = () => {
      if (isRepeat) {
        audio.currentTime = 0;
        audio.play();
      } else {
        onNext();
      }
    };

    if (audio) {
      audio.addEventListener("ended", handleEnd);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("ended", handleEnd);
      }
    };
  }, [isRepeat, onNext]);

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
    <div className="h-18 bg-[#f5f5f7] border-t border-gray-200 flex flex-col justify-center px-6 border-r border-gray-400">
      {/* CONTROLES */}
      <div className="flex items-center justify-between">
        {/* INFO */}
        <div className="w-1/3">
          {song ? (
            <div className="flex items-center  gap-4">
              <div className="w-12 h-12 items-center justify-center rounded bg-gray-200 ">
                <img
                  className="w-full h-full object-cover"
                  src={song.image}
                  alt={song.title}
                />
              </div>
              <div>
                <p className="text-sm font-medium text-black">{song.title}</p>
                <p className="text-xs text-gray-500">{song.artist}</p>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-400">Selecciona una canción</p>
          )}
        </div>

        {/* BOTONES */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsShuffle(!isShuffle)}
              className={`w-[32px] h-[32px] flex items-center justify-center rounded-full transition
        ${isShuffle ? "text-purple-600" : "text-gray-500 hover:bg-gray-200"}
      `}
            >
              <LuShuffle size={18} />
            </button>

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

            <button
              onClick={() => setIsRepeat(!isRepeat)}
              className={`w-[32px] h-[32px] flex items-center justify-center rounded-full transition
        ${isRepeat ? "text-purple-600" : "text-gray-500 hover:bg-gray-200"}
      `}
            >
              <LuRepeat size={18} />
            </button>
          </div>

          {/* BARRA DE PROGRESO*/}
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
              className="w-full h-[2px] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[10px] [&::-webkit-slider-thumb]:h-[10px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:opacity-0 [&::-webkit-slider-thumb]:transition hover:[&::-webkit-slider-thumb]:opacity-100"
            />

            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* VOLUMEN */}
        <div className="w-1/3 flex justify-end items-center gap-2">
          {/* (rayitas) */}
          <button className="w-[32px] h-[32px] flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-200 transition">
            <LuListMusic size={18} />
          </button>

          {/* CAST */}
          <button className="w-[32px] h-[32px] flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-200 transition">
            <MdCast size={18} />
          </button>

          {/*VOLUMEN  */}
          <div className="relative group flex items-center h-12">
            <button
              onClick={toggleMute}
              className="w-[32px] h-[32px] flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-200 transition"
            >
              {isMuted || volume === 0 ? (
                <HiVolumeOff size={18} />
              ) : (
                <HiVolumeUp size={18} />
              )}
            </button>

            <div className="absolute bottom-12 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] rounded-xl px-3 py-2">


                <input
  type="range"
  min="0"
  max={duration || 0}
  value={currentTime}
  onChange={handleSeek}
  style={
    mounted
      ? {
          background: `linear-gradient(to right, #7c3aed ${progress}%, #d1d5db ${progress}%)`,
        }
      : {}
  }
  className="w-full h-[2px] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[10px] [&::-webkit-slider-thumb]:h-[10px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:opacity-0 [&::-webkit-slider-thumb]:transition hover:[&::-webkit-slider-thumb]:opacity-100"
/>

              </div>
            </div>
          </div>

          {/* SLIDERS  */}
          <button className="w-[32px] h-[32px] flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-200 transition">
            <LuSlidersHorizontal size={18} />
          </button>
        </div>
      </div>

      <audio ref={audioRef} />
    </div>
  );
}
