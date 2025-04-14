"use client";

import React, { useEffect } from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const RecommendedMoviesContainer = () => {
  console.log("inside revommende movies containeer ");
  const movies = useSelector((store) => store?.gpt?.gptMovies);
  console.log(movies);

  // if(!movies){
  //   return null;
  // }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 550, behavior: "smooth" });
    }
  }, []);

  return (
    <div>
      {movies?.map((movie, i) => (
        <MovieList key={i} title={movie[0]?.title} gptMovies={movie} />
      ))}
    </div>
  );
};

export default RecommendedMoviesContainer;
