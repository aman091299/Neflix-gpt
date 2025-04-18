"use client";

import OpenAI from "openai";
import { useRef,useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGPTMovies } from "../utils/searchGPTSlice";
import Header from "./Header";
import lang from '../utils/languageConstants'
import {useSelector} from 'react-redux'
import Loader from "./common/Loader";
const SearchBar = () => {
  const [loading,setLoading]=useState(false);
  const movieSuggestion = useRef(null);
  const language=useSelector(store=>store.langConfig.lang)

  const dispatch=useDispatch();
  const getTMDBMovies=async(movie)=>{
    try {
       
        const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
        const json =await data.json();
        return json.results;
        
    } catch (error) {
        console.error("fail in fetch movie from TMDB movie api",error);
        throw error
 
    }

  }
  async function searchHandler() {
    setLoading(true);
    try {
      const client = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
        dangerouslyAllowBrowser: true,
      });

      const gptQuery = `Act as a professional movie recommendation engine. Based on the user's input: "${movieSuggestion.current.value}", suggest exactly 5 relevant movie names. 

Instructions:
1- ONLY return the NAMES of 5 movies, separated by commas (no numbering, no extra text).
2. If the input is a specific movie title (e.g., "Chup Chup Ke"), return 5 closely related movies (same genre, director, or theme).
3- The movies should be relevant to the input (e.g.,same genre, title, theme, date or specific query).
4-  Never recommend 18+/adult/pornographic content or 18+ or adult-rated content or porn movies or adult movies .
5- If the input includes filters (e.g.,"INDIAN MOVIES" "IMDB rating above 7", "Hindi", "Bollywood", "from 2025","latest","Hollywood","web series","latest movies of imdb rating 8 ","imdb","8","7","9","imdb 8 above","imdb 8 rating"), apply them accurately and apply them precisely and find the date and accourding suggest the result..
6- Format: Movie1, Movie2, Movie3, Movie4, Movie5

Examples:
Input: "Chup Chup Ke" → Output: Chup Chup Ke, Hungama, Hera Pheri, Garam Masala, Bhagam Bhag
Input: "Bollywood movies with IMDb above 7 in 2025" → Output: (hypothetical) Fighter 2, Shaktimaan, Ramayana, Lahore 1947, Vedaa

Example output:
Sholay, Rang De Basanti, Chak De India, Jab Tak Hai Jaan, Lagaan`;


      const gptResult = await client.chat.completions.create({
        model: "gpt-4o-mini",
        store: true,
        messages: [{ role: "user", content: gptQuery }],
      });


      const fiveGPTMovies = gptResult.choices[0].message.content.split(",");

      // const fiveGPTMovies=[ "Sholay", "Rang De Basanti", "Chak De India", "Jab Tak Hai Jaan", "Lagaan"]
     const promisesArray= fiveGPTMovies.map((movie)=>(getTMDBMovies(movie)));
     const tmdbResult=await Promise.all( promisesArray);
     dispatch(addGPTMovies(tmdbResult))
     console.log(tmdbResult)
    } catch (error) {
      console.error("fail in fetch open ai api data", error);
    }
    finally{
      setLoading(false);
    }
  }



  return (
    <>
    {
      loading && <div>
      <div className="absolute inset-0 flex justify-center items-center  bg-opacity-20 z-27">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent" ></div>
      </div>
      </div>
     }
    <div>
    <Header/>
    <div className=" flex justify-center items-center  h-screen">
      <div className="relative z-25 bg-black md:w-6/12 flex gap-4 items-center  ">
        <input
          ref={movieSuggestion}
          type="text"
          placeholder={lang[language].SearchPlaceholder}
          className="px-4 py-2 m-2 bg-white md:w-[80%] focus:outline-none text-[15px] md:font-normal"
        />
        <button
          
          className={`text-white py-2 z-0 px-6 rounded-lg m-2 cursor-pointer ${loading ?"bg-gray-500":"bg-red-700" } hover:bg-red-500 btn btn-blue focus:outline-none focus:border`}   onClick={searchHandler}
        >
         {loading ?"Searching...":"Search "}
        </button>
      </div>
    </div>
    </div>
    </>
  );
};

export default SearchBar;
