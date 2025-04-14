import { createSlice } from "@reduxjs/toolkit";

const languageConfigSlice=createSlice({

    name:"langConfig",
    initialState:{
        lang:'en',
    },
    reducers:{
     addingLanguage:(state,action)=>{
        state.lang=action.payload;
     }
    }

})


export const {addingLanguage}=languageConfigSlice.actions;

export default languageConfigSlice.reducer;
