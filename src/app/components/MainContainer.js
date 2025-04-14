
'use client'
import MovieList from "./MovieList";

const MainContainer=()=>{

    return(
        <div>
         <MovieList title={"Now Playing Movies"}/>
        <MovieList title={"Popular Movies"}/>
        <MovieList title={"Latest Movies"}/>
        <MovieList title={"Upcoming Movies"}/>
        </div>
    )
}

export default MainContainer;