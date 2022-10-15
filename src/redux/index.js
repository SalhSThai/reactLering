
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './reduxSlice/authSlice';
import  loadingReducer  from "./reduxSlice/loadingSlice";
import  plusMinusReducer  from "./reduxSlice/plusMinusSlice";



  export const store = configureStore({
    reducer:{
      auth: authReducer,
      loading: loadingReducer,
      plusMinus: plusMinusReducer
    }
  })
