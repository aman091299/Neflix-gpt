import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        activeUser:null
    },

    reducers:{
        addUser:(state,action)=>{
             state.activeUser=action.payload;
        },
        removeUser:(state)=>{
         state.activeUser=null;
        }
    }

})


export const {addUser,removeUser}=userSlice.actions
export default userSlice.reducer;