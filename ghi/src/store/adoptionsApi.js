import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { authApi } from './authApi'


export const adoptionsApi = createApi({
    reducerPath: 'adoptions',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_PAWSITIVE_SERVICE_API_HOST,
        prepareHeaders: (headers, { getState }) => {
            const selector = authApi.endpoints.getToken.select();
            const { data: tokenData } = selector(getState());
            if (tokenData && tokenData.access_token) {
                headers.set('Authorization', `Bearer ${tokenData.access_token}`);
            }
            return headers;
        }
    }),
    tagTypes: ['ListAdoptions'],
    endpoints: builder => ({
        getAdoptions: builder.query({
            // To pass arguments to the URL, you do it inside of the query(*here*)
            query: () => ({
                url: '/api/adoptions',
                credentials: 'include',
            }),
            providesTags: ['ListAdoptions'],
        }),
        createAdoption: builder.mutation({
            query: data => ({
                url: '/api/adoptions',
                body: data,
                method: 'POST',
            }),
            invalidatesTags: ['ListAdoptions']
        }),
    }),
})

export const { useGetAdoptionsQuery, useCreateAdoptionMutation } = adoptionsApi
