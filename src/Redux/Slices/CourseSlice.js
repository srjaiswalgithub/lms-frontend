import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance";


const initialState = {
    coursesData : []
}

export const getAllCourses = createAsyncThunk("/get/courses",async ()=>{
    try{
        let res = axiosInstance.get("/courses");
        toast.promise(res,{
            loading:"Loading courses data...",
            success:"Courses loaded successfully",
            error:"Failed to get courses"
        })

        // getting response resolved here
        res = await res;
        
        return res.data.courses;
    }
    catch(error){
        toast.error(error?.res?.data?.message)

    }
})

const courseSlice = createSlice({
    name:'courses',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllCourses.fulfilled,(state,action)=>{
            if (action.payload) {
                
                state.coursesData = [...action.payload];
            }
        })
        
    }
})


export default courseSlice.reducer;