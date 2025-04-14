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
    {
      movies?.map((movie,i)=>(
    
         <MovieList key={movie[0]?.id} title={movie[0]?.title} gptMovies={movie}/>
      
      ))
    }
     
    </div>
  )
}

export default RecommendedMoviesContainer