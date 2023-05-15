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
      query: () => "activities/all",
      providesTags: ["Activities"],
    }),
    createActivites: builder.mutation({
      query: (newActivity) => ({
        url: "/activities",
        method: "POST",
        body: newActivity,
      }),
      invalidatesTags: ["Activities"],
    }),
    updateActivity: builder.mutation({
      query: (updatedActivity) => ({
        url: `/activities/${updatedActivity.id}`,
        method: "PUT",
        body: updatedActivity,
      }),
      invalidatesTags: ["Activities"],
    }),
    deleteActivity: builder.mutation({
      query: (activityId) => ({
        url: `/activities/${activityId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Activities"],
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
  useGetActivitesQuery,
  useCreateActivitesMutation,
  useUpdateActivityMutation,
  useDeleteActivityMutation
} = apiSlice;
