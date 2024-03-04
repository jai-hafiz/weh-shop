import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice ({
    name:'user',
    initialState : {
        isLoggedIn : false,
    
        
    },
    reducers : {
        login: (state) => {
            state.isLoggedIn = true;
        },
        logOut : (state) => {
            state.isLoggedIn = false;
        }
       
    }
})

export default userSlice;
export const userActions = userSlice.actions;