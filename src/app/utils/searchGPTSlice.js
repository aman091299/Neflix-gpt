import { createSlice } from "@reduxjs/toolkit";


const searchGPTSlice=createSlice({

    name:"gpt",
    initialState:{
        gptMovies:null,
        showGPTSearch:false,
    },
    reducers:{
       addGPTMovies:(state,action)=>{
           state.gptMovies=action.payload;
       },
       toogleGPTButton:(state,action)=>{
        state.showGPTSearch=action.payload;
       }

    }
})


export const {addGPTMovies,toogleGPTButton}=searchGPTSlice.actions;

export default searchGPTSlice.reducer;