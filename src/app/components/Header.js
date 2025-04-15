'use client';
import { useRouter } from 'next/navigation'
import {useDispatch,useSelector} from 'react-redux'
import {removeUser} from '../utils/userSlice'
import { useEffect ,useState} from 'react';
import { toogleGPTButton } from '../utils/searchGPTSlice';
import { addingLanguage } from '../utils/languageConfigSlice';
import lang from '../utils/languageConstants'

const Header = ()=>{
 
    const [account,setAccount]=useState(null);
   
   
    const showGPTSearchView=useSelector(store=>store.gpt.showGPTSearch)
    const language=useSelector(store=>store.langConfig.lang)


    const router=useRouter();
    const  dispatch=useDispatch();
   

    useEffect(()=>{
      try{
        if(typeof window !== 'undefined'){
          setAccount(JSON.parse(localStorage.getItem('userData')));
        }
      }
      catch(error){
        console.error("local storage is not define",error)
      }
     
    
    },[]);

    const gotoHomepageHandler=()=>{
      router.push('/')
    }

   const handleSignOut= async ()=>{
    console.log("signout")
    try {
      dispatch(removeUser())
      localStorage.removeItem('userData');
      router.push('/')
    } catch (error) {
      console.error('sign Out fail',error);
    }
      
    }

    function handleSearchGPT(){
      dispatch(toogleGPTButton(!showGPTSearchView));
      if(!showGPTSearchView){
        router.push('/searchgpt')
      }
      else{
        router.push('/')
      }
     
    }
  
   function languageChangeHandler(e){
     console.log(e.target.value)
     dispatch(addingLanguage(e.target.value))
   }
    
    return (
      <>
        <div className="z-20 absolute  px-8 py-12 flex flex-col items-center md:flex md:flex-row md:justify-between w-full">
        <img  
        onClick={gotoHomepageHandler}
        className="w-40 md:w-45 cursor-pointer mt-[-30]  md:mt-0"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix logo"/>
       
       <div className="flex h-15 gap-3">
        <select  value={language}  className="text-white bg-black rounded-lg mt-4  p-2 " onChange={(e)=>languageChangeHandler(e)}>
          <option value='en'>English</option>
          <option value='hi'>Hindi</option>
          <option value="sp">Spanish</option>
        </select>
       {account &&
       <div className="flex gap-3">
       <button className="text-white z-30 mt-4 cursor-pointer bg-violet-700  rounded p-2" onClick={handleSearchGPT}>
          {!showGPTSearchView ? lang[language].SearchGPT : lang[language].Homepage} 
          </button>
          <button className="text-white z-30 mt-4 cursor-pointer bg-pink-700  rounded p-2" onClick={handleSignOut}>
          {lang[language].Signout}
          </button>
       </div>
    
          
        }
       </div>
     
        </div>
     
        </>
    );
}


export default Header;