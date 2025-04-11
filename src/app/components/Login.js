"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { validateForm } from "@/utils/validateForm";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [error,setError]=useState('');
  const emailRef=useRef(null);
  const passwordRef=useRef(null);
  const nameRef=useRef(null);

  function handleSubmit(e){
     e.preventDefault()
    console.log("inside sign handler")
    const email=emailRef.current?.value;
    const password=passwordRef.current?.value;
    const name=nameRef.current?.value;
  const message=validateForm(email,password);
  if(message){
    setError(message)
    return
  }
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


  }
  return (
    <>
      <div className="absolute w-full h-full">
        <Image
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web_tall_panel/IN-en-20250407-TRIFECTA-perspective_8be2cd93-f2e6-4e34-acba-05b716385704_small.jpg"
          alt="Netflix background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <form onSubmit={handleSubmit} className="w-3/12  text-white absolute z-11   bg-black py-16 px-10  rounded-lg flex flex-col gap-6 opacity-90  left-110 top-20">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <input
          type="email"
          ref={emailRef}
          placeholder="email or phone number"
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
          placeholder="Password"
          className="border border-black bg-gray-900 p-2 rounded-lg"
          required
        />
        {
            error.includes('Password') && <div className="text-red-600 ">
                {error}
            </div>
        }
        {!isLogin && (
          <>
            <button  type="submit" className="text-xl font-bold bg-red-700 px-20 py-2 rounded-lg">
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-xl"
            >
              Sign Up
            </button>
          </>
        )}
        {isLogin && (
          <>
            <input
             ref={nameRef}
              type="text"
              placeholder="name"
              className="border border-black bg-gray-900 p-2 rounded-lg"
              required
            />
 <button  type="submit" className="text-xl font-bold bg-red-700 px-20 py-2 rounded-lg">
              Sign Up
            </button>

            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-xl"
            >
              Sign In
            </button>
          </>
        )}
      </form>
    </>
  );
};

export default Login;
