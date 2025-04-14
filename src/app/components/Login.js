
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { useRef, useState } from "react";
import { validateForm } from "../utils/validateForm";
import { BG_URL } from '../utils/constants';
import { addUser } from '../utils/userSlice';
import { useDispatch,useSelector } from 'react-redux';
import { toogleGPTButton } from '../utils/searchGPTSlice';

import lang from '../utils/languageConstants'
const Login = () => {
console.log("inside login")
const language=useSelector(store=>store.langConfig.lang)

  const [isLogin, setIsLogin] = useState(false);
  const [error,setError]=useState('');

  const router=useRouter();
  const emailRef=useRef(null);
  const passwordRef=useRef(null);
  const nameRef=useRef(null);
  const dispatch=useDispatch();

  async function  handleSubmit (e){
    try {

      e.preventDefault();
      const email=emailRef.current?.value;
      const password=passwordRef.current?.value;
      const name=nameRef.current?.value;
    const message=validateForm(email,password);
  
    if(message){
  
      setError(message)
      return
    }
  
    dispatch(addUser({id:email,password:password}))
    console.log("yha tk sbh shi hai");
    dispatch(toogleGPTButton(false))
    console.log("yha tk sbh shi hai 3");
    localStorage.setItem('userData',  JSON.stringify({email,password}));
    router.push('/browse')
      
    } catch (error) {
      console.error("error in setting localstorage",error)
    }
   
 
  }
  return (
    <>
      <div className="absolute w-full h-full">
        <Image
          src={BG_URL}
          alt="Netflix background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <form onSubmit={handleSubmit} className="w-3/12  text-white absolute z-11   bg-black py-16 px-10  rounded-lg flex flex-col gap-6 opacity-90  left-110 top-20">
        <h1 className="text-2xl font-bold">{lang[language].signIn}</h1>
        <input
          type="email"
          ref={emailRef}
          placeholder={lang[language].emailPlaceholder}
          className="border border-black bg-gray-900 p-2 rounded-lg"
          required
        />
         {
            error.includes('Email') && <div className="text-red-600 ">
                {error}
            </div>
        }
        <input
        ref={passwordRef}
          type="password"
          placeholder={lang[language].passwordPlaceholder}
          className="border border-black bg-gray-900 p-2 rounded-lg"
          required
        />
        {
            error.includes('Password') && <div className="text-red-600 ">
                {error}
            </div>
        }
       
          <>
          {isLogin && 
            <input
             ref={nameRef}
              type="text"
              placeholder="name"
              className="border border-black bg-gray-900 p-2 rounded-lg"
              required
            />
          }
            <button  type="submit" className="text-xl font-bold bg-red-700 px-20 py-2 rounded-lg cursor-pointer">
           {!isLogin ?  lang[language].signIn:lang[language].singOut}
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-xl"
            >
              {!isLogin ?   lang[language].signOut:lang[language].singIn} 
            </button>
          </>
        
      </form>
    </>
  );
};

export default Login;
