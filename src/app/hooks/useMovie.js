import { API_OPTIONS, IMG_URL, MOVIE_LIST_URL } from "../utils/constants";
import { useEffect ,useState} from "react"


const useMovie=()=>{
 const [movies,setMovies]=useState(null)
console.log("inside movie list")

  async function getMoviesData(){
      try {
          const data=await fetch(MOVIE_LIST_URL,API_OPTIONS);
          const json=await data.json();
           setMovies(json.results)
      } catch (error) {
          console.error("fetchig movies list error",error)
          throw error;
      }
  
  }
  useEffect(()=>{
     !movies && getMoviesData();
  },[])

  
  
  return movies
}

export default useMovie;
