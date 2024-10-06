import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance";


const initialState = {
    isLoggedIn:localStorage.getItem('isLoggedIn')|| false,
    role:localStorage.getItem('role')|| "",
    data:JSON.parse(localStorage.getItem('data'))|| {},
}

// function to handle signup
export const createAccount = createAsyncThunk("user/register",async (data)=>{
    try{
        let res = axiosInstance.post("user/register", data);
        toast.promise(res,{
            loading:"Wait! Creating your account",
            success:"user successfully registered",
            // success:(data)=>{
            //     return data?.data?.message
            // },
            error:"Failed to create account!"
        })

        // getting response resolved here
        res = await res;
        return res.data;


    }
    catch(error){
        toast.error(error?.response?.data?.message);
        
    }
})

// function to handle login
export const login = createAsyncThunk("user/login",async (data)=>{
    try{
        let res = axiosInstance.post("user/login", data);
        toast.promise(res,{
            loading:"Wait! authentication is in process...",
            success:"you are successfully logged in",
            // success:(data)=>{
            //     return data?.data?.message
            // },
            error:"Failed to login!"
        })

        // getting response resolved here
        res = await res;
        console.log(res.data);
        return res.data;


    }
    catch(error){
        toast.error(error?.response?.data?.message);
        
    }
})

// function to handle logout
export const logout = createAsyncThunk("user/logout",async ()=>{
    try{
        let res = axiosInstance.post("user/logout");
        toast.promise(res,{
            loading:"loading...",
            success:"you logout successfully ",
            // success:(data)=>{
            //     return data?.data?.message
            // },
            error:"Failed to logout!"
        })

        // getting response resolved here
        res = await res;
        return res.data;


    }
    catch(error){
        toast.error(error?.response?.data?.message);
        
    }
})
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        // // for user login
        .addCase(login.fulfilled,(state,action)=>{
            localStorage.setItem("data", JSON.stringify(action?.payload?.data));
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", action?.payload?.data?.role);
            state.isLoggedIn = true;
            state.data = action?.payload?.data;
            state.role = action?.payload?.data?.role;
        })
        // // for logout 
        .addCase(logout.fulfilled,(state,action)=>{
            localStorage.clear();
            
            state.isLoggedIn = false;
            state.data = {};
            
        })
    }
});

export default authSlice.reducer;