import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:3001";

const initialState = {
    countries: [],
    countryDetail: {},
};

export const getCountries = createAsyncThunk("country/getCountries", async () => {
    try {
      const response = await axios.get(`${baseURL}/countries`);
      return response.data;
    } catch (error) {
      return error.response.data.message;
    }
  });


export const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.
        addMatcher(getCountries,(state, action) => {
            state.countries = action.payload
            return state
        })
    }
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = countrySlice.actions;

export default countrySlice.reducer;
