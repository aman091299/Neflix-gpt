"use client"


import Image from 'next/image'
import { BG_URL } from '../utils/constants'
import SearchBar from '../components/SearchBar'
import RecommendedMoviesContainer from '../components/RecommendedMoviesContainer'
import { useRouter } from 'next/navigation'
import Loader from '../components/common/Loader'
import { useEffect ,useState} from 'react'
const SearchGPT=()=>{
  console.log("inside search gpt page")
  const [account,setAccount]=useState(null);
  const router=useRouter();
  console.log("account",account)

  useEffect(()=>{
    try {
      console.log("inside serach gpt use effect ")
      if(typeof window !== 'undefined'){
        const user=localStorage.getItem('userData');
        console.log("user",user)
        if(!user){
          router.push('/')
        }
        setAccount(user);
      }
    } catch (error) {
      console.error("error in locat storage in search gpt page",error)
    }
  },[])


   if(!account){
   
   return  <Loader/>
   
   }



  return (
    <div>
    <Image  src={BG_URL}
       alt="Netflix background"
          fill
          priority
          className="object-cover"
    />
   <div>
   <SearchBar/>
   <RecommendedMoviesContainer/>
   </div>
    </div>
  )
}
export default SearchGPT