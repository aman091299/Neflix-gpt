import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice"
import searchGPTSlice from './searchGPTSlice'
const store=configureStore({
    reducer:{
      user:userReducer,
      gpt:searchGPTSlice
    },
})


export default store;