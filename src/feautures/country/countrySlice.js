import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:3001";

const initialState = {
    countries: [],
    countryDetail: {},
};

export const getCountries = createAsyncThunk(
    "country/getCountries",
    async () => {
        try {
            const response = await axios.get(`${baseURL}/countries`);
            return response.data;
        } catch (error) {
            return error.response.data.message;
        }
    }
);

export const countryDetail = createAsyncThunk(
    "country/countryDetail",
    async (id) => {
        try {
            const resp = await axios.get(`${baseURL}/countries/${id}`);
            return resp.data;
        } catch (error) {
            if (error.resp?.status !== 404) alert("something went wrong 😮");
        }
    }
);

export const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(getCountries, (state, action) => {
            state.countries = action.payload;
            return state;
        });
        builder.addMatcher(countryDetail, (state, action) => {
            //console.log(action.payload)
            return {
                ...state,
                countryDetail: action.payload,
            };
        });
    },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = countrySlice.actions;

export default countrySlice.reducer;
