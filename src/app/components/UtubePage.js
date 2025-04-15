

import {useRef} from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants'

const UtubePage = () => {
  const language=useSelector(store=>store.langConfig.lang)

    const playVideoRef=useRef(null);
    const handlePlay=()=>{
        try {
            const iframe= playVideoRef?.current
            // Get the current src without any parameters
            const baseUrl = "https://www.youtube.com/embed/-2RAq5o5pwc";
            // Set new parameters for autoplay with sound
            iframe.src = `${baseUrl}?autoplay=1&mute=0`;
            
        } catch (error) {
            console.error("fail in fetching utube data",error);
        }
   
    }
  return (
    <>
    <div className=" w-screen h-screen top-[-1]">
    <iframe className="h-full w-full" ref={playVideoRef} src="https://www.youtube.com/embed/-2RAq5o5pwc" title="Jhol | Coke Studio Pakistan | Season 15 | Maanu x Annural Khalid"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>      
        </div>
   <div className="absolute top-60 left-20 flex  gap-4">
    <button  className="bg-white rounded-lg text-black px-6 py-2" onClick={
       handlePlay
      }
      >  {lang[language].PlayMore}</button>
    <button className="bg-gray-600 rounded-lg text-black px-6 py-2">{lang[language].MoreInfo}</button>
   </div>
   </>
  )
}

export default UtubePage