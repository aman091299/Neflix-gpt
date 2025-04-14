"use client";

import OpenAI from "openai";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGPTMovies } from "../utils/searchGPTSlice";
import Header from "./Header";

const SearchBar = () => {
  const movieSuggestion = useRef(null);

  const dispatch=useDispatch();
  const getTMDBMovies=async(movie)=>{
    try {
       
        const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
        const json =await data.json();
        console.log(json.results)
        return json.results;
        
    } catch (error) {
        console.error("fail in fetch movie from TMDB movie api",error)
    }

  }
  async function searchHandler() {
    try {
    //   const client = new OpenAI({
    //     apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
    //     dangerouslyAllowBrowser: true,
    //   });

    //   const gptQuery =
    //     "Act as movie recommendation system suggest me some movie from the query" +
    //     movieSuggestion.current.value +
    //     "only give me names of 5 movies only no other text then movie names separated by comma example like solay,rang de basti,jak de india,jab tak hai jain ,lagaan";
    //   const gptResult = await client.chat.completions.create({
    //     model: "gpt-4o-mini",
    //     store: true,
    //     messages: [{ role: "user", content: gptQuery }],
    //   });

    //   console.log("inside gpt api", gptResult.choices[0].message.content);
    //   console.log("inside gpt api message", gptResult.choices[0].message);
    //   const fiveGPTMovies = gptResult.choices[0].message.content.split(",");

    const fiveGPTMovies=["Tumbbad", "Andhadhun", "Stree", "Drishyam", "Bhool Bhulaiyaa"]
     console.log(fiveGPTMovies)
     const promisesArray= fiveGPTMovies.map((movie)=>(getTMDBMovies(movie)));
     const tmdbResult=await Promise.all( promisesArray);
     dispatch(addGPTMovies(tmdbResult))
     console.log(tmdbResult)
    } catch (error) {
      console.error("fail in fetch open ai api data", error);
    }
  }

 

  return (
    <div>
    <Header/>
    <div className=" flex justify-center items-center  h-screen">
      <div className="relative z-40 bg-black w-6/12 flex gap-4 items-center  ">
        <input
          ref={movieSuggestion}
          type="text"
          placeholder="What type of movies do you want search here"
          className="px-4 py-2 m-2 bg-white w-[80%] focus:outline-none  "
        />
        <div
          className="bg-red-700 text-white py-2 px-6 rounded-lg m-2"
          onClick={searchHandler}
        >
          Search{" "}
        </div>
      </div>
    </div>
    </div>
  );
};

export default SearchBar;
