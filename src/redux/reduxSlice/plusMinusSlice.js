import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getLorems = createAsyncThunk(
    "getLorems",
    async (object, { getState, rejectWithValue }) => {
        console.log(getState(),"getState");
        try {
            const { data } = await axios.get(
                "https://baconipsum.com/api/?type=meat-and-filler"
            );
            return data;
        } catch (error) {
            rejectWithValue(error.response);
        }
    }
);









export const getLorems2 = createAsyncThunk(
    "getLorems",
    async (object, { getState, rejectWithValue }) => {
        console.log(getState(),"getState2");
        try {
            const { data } = await axios.get(
                "https://baconipsum.com/api/?type=meat-and-filler"
            );
            return data;
        } catch (error) {
            rejectWithValue(error.response);
        }
    }
);

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        data: [],
        loading: false,
        isSuccess: false,
        message: "",
    },
    reducers: {
        increase: (state, action) => {
            console.log(action);
            state.count += (action.payload ?? 1)
        },
        decrease: (state, action) => {
            state.count -= (action.payload ?? 1)
        },

    },
    extraReducers: {
        [getLorems.pending]: (state, action) => {
            console.log("pendding");
            state.loading = true;
        },
        [getLorems.fulfilled]: (state, { payload }) => {
            console.log("fulfilled");
            state.loading = false;
            state.data = payload;
            state.isSuccess = true;
        },
        [getLorems.rejected]: (state, { payload }) => {
            console.log("reject");
            state.loading = false;
            state.isSuccess = false;
            state.message = "failed";
        },







        getLorems2: (state, action) => {
            console.log(action.payload,"payload2");
            state.data = action.payload;
        }
    },
})


console.log(counterSlice);

export default counterSlice.reducer
const { increase, decrease } = counterSlice.actions;
export { increase, decrease }


