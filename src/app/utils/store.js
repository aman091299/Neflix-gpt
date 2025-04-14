import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice"
import searchGPTSlice from './searchGPTSlice'
import languageConfigSlice from "./languageConfigSlice";
const store=configureStore({
    reducer:{
      user:userReducer,
      gpt:searchGPTSlice,
      langConfig:languageConfigSlice,
    },
})


export default store;