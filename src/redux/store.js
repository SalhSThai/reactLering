import { configureStore, createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
      increase: (state, action) => {
        console.log(action);
        state.count += (action.payload ?? 1)
      },
      decrease: (state, action) => {
        state.count = 99
      }
    }
  })
  const authSlice = createSlice({
    name:'auth',
    initialState:{user:null,isLogged:false},
    reducers:{
      login:(state,action) => {},
      logout:(state,action)=>{}
    }
  })
  console.log(counterSlice);
  
  const store = configureStore({
    reducer:{
      count:counterSlice.reducer,
      auth:authSlice.reducer
    }
  })
 const countAction = counterSlice.actions;
 const authAction = authSlice.actions;
  export {store,countAction,authAction}

  