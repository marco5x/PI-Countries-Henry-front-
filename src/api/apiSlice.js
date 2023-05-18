import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { sortAlphabetically} from "../utils/utils"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_URL|| "http://localhost:3001"}),
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

/** useQuery ==>>
* data - El último resultado devuelto independientemente del gancho arg, si está presente.
* currentData - El último resultado devuelto para el gancho arg actual, si está presente.
* error - El resultado del error si está presente.
* isUninitialized - Cuando es true, indica que la consulta aún no se ha iniciado.
* isLoading - Cuando es true, indica que la consulta se está cargando por primera vez y aún no tiene datos. Esto será para la primera solicitud disparada, pero no para las solicitudes posteriores.true
* isFetching - Cuando es true, indica que la consulta se está recuperando actualmente, pero podría tener datos de una solicitud anterior. Esto será tanto para la primera solicitud disparada, como para las solicitudes posteriores.true
* isSuccess - Cuando true, indica que la consulta tiene datos de una solicitud correcta.
* isError - Cuando true, indica que la consulta está en un estado.error
* refetch - Una función para forzar la recuperación de la consulta
 */
