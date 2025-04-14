"use client"
import MainContainer from '../components/MainContainer';
import Header from '../components/Header'

import { useRouter } from 'next/navigation';
import {useState,useEffect} from 'react'
import UtubePage from '../components/UtubePage';
import ShimmerUI from '../components/ShimmerUI';
const Browser=()=>{
  console.log("inside browser")
  const router=useRouter();
  //  const [userData,setUserData]=useState(null)
   const [account, setAccount] = useState(null);

   useEffect(() => {
    // This code will only run on the client side
    try{
      console.log("inside browser inside use effect ")
      if (typeof window !== 'undefined') {
     
        const userData = localStorage.getItem('userData');
        console.log("inside browser inside use effect  ",userData)
        if (userData) {
          const {email}=JSON.parse(userData);
          console.log("inside browser inside use effect  email ",email)
          console.log(email)
          setAccount(email);
        } else {
          console.log("inside router push to / page")
          router.push('/');
        }
      }
    }
    catch(error){
         console.error("getting local data fail",error);
    }
    
  }, []);
 
  if(!account){
    console.log("inside account was not there'",account)
    
      return (
        <ShimmerUI/>
      );
  }


    return (
        <>
          <Header/> 
         <UtubePage/>
         <MainContainer/>
        </>
    )
}
export default Browser;