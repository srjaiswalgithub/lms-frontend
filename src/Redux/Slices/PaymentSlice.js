import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance";
const initialState = {
    subscription:"inactive"
}

export const subscribe = createAsyncThunk("/payment/subscribe",async()=>{
    try{
        let res = axiosInstance.get("payments/subscribe");
        toast.promise(res,{
            loading:"loading...",
            success:"you are successfully subscribed!",
            // success:(data)=>{
            //     return data?.data?.message
            // },
            error:"Failed to buy subscription!"
        })

        res = await res;
        return res?.data;
        

    }
    catch(error){
        toast.error(error?.response?.data?.message);
    }
})

const paymentSlice = createSlice({
    name:'payment',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        // // for user login
        .addCase(subscribe.fulfilled,(state,action)=>{
            localStorage.setItem("data", JSON.stringify(action?.payload?.user));
            
            
            
            state.subscription = action?.payload?.user?.subscription;
        })
        
        
    }
});

export default paymentSlice.reducer;