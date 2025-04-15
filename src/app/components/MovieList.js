import { IMG_URL } from "../utils/constants";

import Image from "next/image";

import useMovie from "../hooks/useMovie";
import { useMemo } from "react";


const MovieList = ({ title, gptMovies }) => {
  let movies = gptMovies;

  if (!gptMovies) {
    movies = useMovie();
  }

  const renderedMovies=useMemo(()=>{
    return movies?.map((moviePoster) => (
      <Image
        key={moviePoster.id}
        src={IMG_URL + moviePoster.poster_path}
        width={180}
        height={230}
        alt="movies poster"
      />
    ))
    },[movies])

  // if (movies?.length === 0) {
  //   return (
  //     <div className="text-amber-400 px-10 m-1 ">
  //       There are no movies available
  //     </div>
  //   );
  // }

  if (!movies) {
    return (
      <div className="absolute inset-0 flex justify-center items-center bg-opacity-50">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  


  return (
    <div className="bg-black ">
    {title &&   <h1 className="text-2xl font-bold py-4 text-white px-4">{title}</h1>}
    
      <div className="flex overflow-x-scroll no-scrollbar">
        { renderedMovies}
      </div>
    </div>
  );
};

export default MovieList;
