import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from './Slices/AuthSlice';
import CourseSlice from './Slices/CourseSlice';
const store = configureStore({
    reducer:{
        auth:authSliceReducer,
        courses:CourseSlice
    },
    devTools:true
});

export default store;