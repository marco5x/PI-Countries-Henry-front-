import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { sortAlphabetically} from "../utils/utils"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  tagTypes: ["Countries", "Activities"],
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => "countries",
      providesTags: ["Countries"],
    }),
    getCountryDetail: builder.query({
        query: (id) => `countries/${id}`,
    }),
    getCountryByName: builder.query({
        query: (name) => `countries/name?name=${name}`,
    }),
    getSortAToZ: builder.query({
      query: () => "countries",
      transformResponse: (response) => response.sort((a, b) => sortAlphabetically(a,b)),
    }),
    getSortZToA: builder.query({
      query: () => "countries",
      transformResponse: (response) => response.sort((a, b) => sortAlphabetically(b,a)),
    }),
    getSortPopulationAsc: builder.query({
      query: () => "countries",
      transformResponse: (response) => response.sort((a, b) => b.population - a.population),
      
    }),
    getSortPopulationDesc: builder.query({
      query: () => "countries",
      transformResponse: (response) => response.sort((a, b) => a.population - b.population),
    }),
    getActivites: builder.query({
      query: () => "activities",
      providesTags: ["Activities"],
    }),
    createActivites: builder.mutation({
      query: (newTask) => ({
        url: "/activities",
        method: "POST",
        body: newTask,
      }),
    }),
    updateTask: builder.mutation({
      query: (updatedTask) => ({
        url: `/tasks/${updatedTask.id}`,
        method: "PATCH",
        body: updatedTask,
      }),
      invalidatesTags: ["Tasks"],
    }),
    deleteTask: builder.mutation({
      query: (taskId) => ({
        url: `/tasks/${taskId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetCountriesQuery,
  useGetCountryDetailQuery,
  useGetCountryByNameQuery,
  useGetSortZToAQuery,
  useGetSortAToZQuery,
  useGetSortPopulationAscQuery,
  useGetSortPopulationDescQuery,
  useCreateActivitesMutation
} = apiSlice;