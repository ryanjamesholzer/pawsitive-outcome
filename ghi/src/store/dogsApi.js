import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useAuthContext } from '../Accounts/useToken'


export const dogsApi = createApi({
    reducerPath: 'dogs',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_PAWSITIVE_SERVICE_API_HOST,
        prepareHeaders: (headers) => {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwMmJjMzVlMS1iZDU3LTQwMWYtODAwYi0xZDEyMjFmYjNmYmMiLCJleHAiOjE2NzM1NzM1NzEsInN1YiI6InN0YW5reSIsImFjY291bnQiOnsiaWQiOiIxIiwidXNlcm5hbWUiOiJzdGFua3kiLCJmdWxsX25hbWUiOiJzdGFua3kgc3RhbmsifX0.Seu4-C7r9_75OVGvFbGLcsamHCOLPj52yv4NtEMFMbI"
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
        }
    }),
    tagTypes: ['ListDogs'],
    endpoints: builder => ({
        getDogs: builder.query({
            // To pass arguments to the URL, you do it inside of the query(*here*)
            query: () => '/api/dogs',
            providesTags: ['ListDogs'],
        }),
        createDog: builder.mutation({
            query: data => ({
                url: '/api/dogs',
                body: data,
                method: 'POST',
            }),
            invalidatesTags: ['ListDogs']
        }),
    }),
})

export const { useGetDogsQuery, useCreateDogMutation } = dogsApi