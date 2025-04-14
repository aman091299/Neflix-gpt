"use client"

import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux'
const RecommendedMoviesContainer = () => {
  console.log("inside revommende movies containeer ")
  const movies=useSelector(store=>store?.gpt?.gptMovies)
  console.log(movies);

  return (
    <div>
    {movies &&
      movies?.map((movie,i)=>(
         <>
         {console.log("movie id",movie,i)}
         <MovieList key={i} title={movie[0]?.title} gptMovies={movie}/>
         </>
      ))
    }
     
    </div>
  )
}

export default RecommendedMoviesContainer