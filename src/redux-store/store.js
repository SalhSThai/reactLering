
import { configureStore, createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name:'counter',
    initialState:{count:0},
    reducers:{
      increase:(state,action)=>{
        state.count += 1
      },
      decrease:(state,action)=>{
        state.count -= 1
      }
    }
  })
  
  const authSlice = createSlice({
    name:'auth',
    initialState:{user:null,isLogged:false},
    reducers:{
      login:(state,action)=>{},
      logout:(state,action)=>{}
    }
  })
  const store = configureStore({
    reducer:{
      count:counterSlice.reducer,
      auth: authSlice.reducer
    }
  })

  const countActions = counterSlice.actions;
  export {store,countActions}