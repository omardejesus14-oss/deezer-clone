
import Link from "next/link";
import link from "next/link"

export default function MainContent({setView}) {

  const categories = [
  { id: 1, 
    title: "Hacer deporte", 
    image: "https://cdn-images.dzcdn.net/images/playlist/f1f288eec136a4f5fc2af062c5450af5/128x128-000000-80-0-0.jpg" },
  { id: 2,
     title: "Podcasts", 
     image: "https://cdn-images.dzcdn.net/images/playlist/481055bead97eb0b47a98c93b988a488/128x128-000000-80-0-0.jpg" },
  { id: 3,
     title: "Charts", 
     image: "https://cdn-images.dzcdn.net/images/playlist/0b92c2f9e94a1a3650f0de769c4fc07c/128x128-000000-80-0-0.jpg" },
  { id: 4,
     title: "Concerts",  
     image: "https://cdn-images.dzcdn.net/images/misc/808734ad496e48d083623664eadc0273/128x128-000000-80-0-0.jpg" },
  { id: 5, 
    title: "Fiesta", 
     image: "https://cdn-images.dzcdn.net/images/playlist/cd9f2e361aba27ab53cd728947cef8f6/128x128-000000-80-0-0.jpg" },
  { id: 6, 
    title: "Piano", 
     image: "https://cdn-images.dzcdn.net/images/playlist/9a4701584f5ed308658467e987814a0b/128x128-000000-80-0-0.jpg" },
];

const genres = [
  {
    id: 1,
    title: "Pop",
    image: "https://cdn-images.dzcdn.net/images/playlist/5369c68581df57010428679fa6e4220c/128x128-000000-80-0-0.jpg",
  },
  {
    id: 2,
    title: "Reggaetón",
    image: "https://cdn-images.dzcdn.net/images/playlist/4806eee254d16b5445412d2d9d9a0ebe/128x128-000000-80-0-0.jpg",
  },
  {
    id: 3,
    title: "Rock",
    image: "https://cdn-images.dzcdn.net/images/playlist/737d42f3fd594b57fa8ab016836aee6f/128x128-000000-80-0-0.jpg",
  },
  {
    id: 4,
    title: "Electrónica",
    image: "https://cdn-images.dzcdn.net/images/playlist/2c1561ad3f0fa7866a75207c167bec11/128x128-000000-80-0-0.jpg",
  },
  {
    id: 5,
    title: "Salsa",
    image: "https://cdn-images.dzcdn.net/images/playlist/2bc8f3637d18360af376593e76119841/128x128-000000-80-0-0.jpg",
  },
  {
    id: 6,
    title: "Musica latina",
    image: "https://cdn-images.dzcdn.net/images/playlist/bc229677a54a0cfdad81e410e1c760ff/128x128-000000-80-0-0.jpg",
  },
];

const podcasts = [
  {
    id: 1,
    title: "Tecnología",
    image: "https://cdn-images.dzcdn.net/images/talk/56e034e680499dadd1d930cbfc954436/128x128-000000-80-0-0.jpg",
  },
  {
    id: 2,
    title: "Noticias y politica",
    image: "https://cdn-images.dzcdn.net/images/talk/ad1c616a33982dfcfebf06d048e33bbb/128x128-000000-80-0-0.jpg",
  },
  {
    id: 3,
    title: "Testimonios",
    image: "https://cdn-images.dzcdn.net/images/talk/da446e338d0d471721d0ff368a4f8187/128x128-000000-80-0-0.jpg",
  },
  {
    id: 4,
    title: "Historia",
    image: "https://cdn-images.dzcdn.net/images/talk/3ac95ebc06a1872372325d9595eda017/128x128-000000-80-0-0.jpg",
  },
  {
    id: 5,
    title: "Humor",
    image: "https://cdn-images.dzcdn.net/images/talk/639b7b8f5a9d6e6337649221b19e688b/128x128-000000-80-0-0.jpg",
  },
  {
    id: 6,
    title: "peliculas y television",
    image: "https://cdn-images.dzcdn.net/images/talk/e9b3d45b21249f36b816133350dfdc26/128x128-000000-80-0-0.jpg",
  },
];

  return (
    <main className="flex-1 overflow-y-auto p-2 bg-white">

      <h1 className="text-[48px] font-black mb-6 leading-[0.8] tracking-[-0.06em]  [transform:scaleY(1.5)] origin-top mb-16">
        Todos los canales
      </h1>

      {/* seccion de categorias */}

      <section className="mb-10">

  <h2 className="text-2xl font-bold mb-5">
    Categorías
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

  {categories.map((item) => (
  <div
  onClick={() => setView("music")}
    key={item.id}
    className="relative h-[100px] rounded-2xl overflow-hidden cursor-pointer group flex items-center justify-center gap-30 bg-gray-200 hover:bg-gray-400 transition p-4"
  >

    {/* texto */}
    <p className="text-gray-700 text-sm font-semibold absolute bottom-2 left-2 cursor-pointer ">
      {item.title}
    </p>
     <img
      src={item.image}
      alt={item.title}
      className="w-[60px]  object-cover group-hover:scale-105 transition rounded-[15px] absolute right-2 bottom-5"
    />

  </div>
))}

  </div>

</section>

{/* seccion de generos */}

<section className="mb-10">

  <h2 className="text-2xl font-bold mb-5">
    Géneros
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

    {genres.map((item) => (
    
      <div   onClick={() => setView("music")}
        key={item.id}
        className="relative h-[100px] rounded-2xl overflow-hidden cursor-pointer group flex items-center justify-center gap-30 bg-gray-200 hover:bg-gray-400 transition p-4"
      >

        {/* texto */}
        <p className="text-gray-700 text-sm font-semibold absolute bottom-2 left-2 cursor-pointer">
          {item.title}
        </p>

        {/* imagen */}
        <img
          src={item.image}
          alt={item.title}
          className="w-[60px] object-cover group-hover:scale-105 transition rounded-[15px] absolute right-2 bottom-5"
        />

      </div>
    ))}

  </div>

</section>


{/* seccion podcasts */}

<section className="mb-10">

  <h2 className="text-2xl font-bold mb-5">
    Podcasts por categoría
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

    {podcasts.map((item) => (
      <div
      onClick={() => setView("music")}
        key={item.id}
        className="relative h-[100px] rounded-2xl overflow-hidden cursor-pointer group flex items-center justify-center gap-30 bg-gray-200 hover:bg-gray-400 transition p-4"
      >

        {/* texto */}
        <p className="text-gray-700 text-sm font-semibold absolute bottom-2 left-2 cursor-pointer">
          {item.title}
        </p>

        {/* imagen */}
        <img
          src={item.image}
          alt={item.title}
          className="w-[60px] object-cover group-hover:scale-105 transition rounded-[15px] absolute right-2 bottom-5"
        />

      </div>
    ))}

  </div>

</section>
     

    </main>
  )
}

//  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

 

// {songs.map((song) => (
//   <div
//     key={song.id}
//     className="group cursor-pointer"
//   >
//     {/* Imagen */}
//     <div
//       onClick={() => setCurrentSong(song)}
//       className="relative rounded-xl overflow-hidden bg-gray-100 hover:bg-gray-200"
//     >
//       <img
//         src={song.image}
//         alt={song.title}
//         className="w-full aspect-square object-cover hover:brightness-90 transition"
//       />

//       {/* BOTONES HOVER */}
//       <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">

//         {/* PLAY */}
// <button
//   onClick={(e) => {
//     e.stopPropagation();

//     setCurrentSong(song);
//     setIsPlaying(true);
//   }}
//   className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-md hover:bg-gray-100 transition"
// >
//   {currentSong?.id === song.id && isPlaying ? (
//     <div className="flex items-end gap-[2px] h-4">
//       <span className="w-[3px] h-2 bg-black animate-pulse rounded-full"></span>
//       <span className="w-[3px] h-4 bg-black animate-pulse delay-75 rounded-full"></span>
//       <span className="w-[3px] h-3 bg-black animate-pulse delay-150 rounded-full"></span>
//     </div>
//   ) : (
//     <FaPlay size={13} className="ml-[1px]" />
//   )}
// </button>

//         {/* FAVORITO */}
//         <button
//           onClick={(e) => e.stopPropagation()}
//           className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:text-purple-600 shadow-md hover:bg-gray-100"
//         >
//           <FaRegHeart size={15} />
//         </button>

//       </div>
//     </div>

//     {/* TEXTO */}
//     <p className="mt-2 text-sm font-semibold truncate">
//       {song.title}
//     </p>

//     <p className="text-xs text-gray-500 truncate">
//       {song.artist}
//     </p>
//   </div>
// ))}

//       </div>