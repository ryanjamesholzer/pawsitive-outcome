import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { clearForm } from './accountSlice';


export const apiSlice = createApi({
  reducerPath: 'authorization',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_PAWSITIVE_SERVICE_API_HOST,
    prepareHeaders: (headers, { getState }) => {
      const selector = apiSlice.endpoints.getToken.select();
      const { data: tokenData } = selector(getState());
      if (tokenData && tokenData.access_token) {
        headers.set('Authorization', `Bearer ${tokenData.access_token}`);
      }
      return headers;
    }
  }),
  tagTypes: ['Account', 'Token'],
  endpoints: builder => ({
    signUp: builder.mutation({
      query: data => ({
        url: '/api/accounts',
        method: 'post',
        body: data,
        credentials: 'include',
      }),
      providesTags: ['Account'],
      invalidatesTags: result => {
        return (result && ['Token']) || [];
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(clearForm());
        } catch (err) {}
      },
    }),
    logIn: builder.mutation({
      query: info => {
        let formData = null;
        if (info instanceof HTMLElement) {
          formData = new FormData(info);
        } else {
          formData = new FormData();
          formData.append('username', info.username);
          formData.append('password', info.password);
        }
        return {
          url: '/token',
          method: 'post',
          body: formData,
          credentials: 'include',
        };
      },
      providesTags: ['Account'],
      invalidatesTags: result => {
        return (result && ['Token']) || [];
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(clearForm());
        } catch (err) {}
      },
    }),
    logOut: builder.mutation({
      query: () => ({
        url: '/token',
        method: 'delete',
        credentials: 'include',
      }),
      invalidatesTags: ['Account', 'Token'],
    }),
    getToken: builder.query({
      query: () => ({
        url: '/token',
        credentials: 'include',
      }),
      providesTags: ['Token'],
    }),
    getDogs: builder.query({
        // To pass arguments to the URL, you do it inside of the query(*here*)
        query: () => ({
            url: '/api/dogs',
            credentials: 'include',
        }),
        providesTags: ['ListDogs'],
    }),
    createDog: builder.mutation({
        query: data => ({
            url: '/api/dogs',
            body: data,
            method: 'POST',
            credentials: 'include',
        }),
        invalidatesTags: ['ListDogs']
    }),
    showDog: builder.query({
        query: (id) => ({
            url: `/api/dogs/{id}?id=${id}`,
            credentials: 'include',
        }),
        providesTags: ['ListDogs'],
    }),
    getAdoptions: builder.query({
        query: () => ({
            url: '/api/adoptions',
            credentials: 'include',
        }),
        providesTags: ['ListAdoptions'],
    }),
    createAdoption: builder.mutation({
        query: data => ({
            url: '/api/adoptions',
            credentials: 'include',
            body: data,
            method: 'POST',
        }),
        invalidatesTags: ['ListAdoptions','ListDogs']
    }),
    showAdoption: builder.query({
        query: (id) => ({
            url: `/api/adoptions/{id}?id=${id}`,
            credentials: 'include',
        }),
        providesTags: ['ListAdoptions'],
    }),

  }),
});

export const {
  useGetTokenQuery,
  useLogInMutation,
  useLogOutMutation,
  useSignUpMutation,
  useGetDogsQuery,
  useShowDogQuery,
  useCreateDogMutation,
  useGetAdoptionsQuery,
  useCreateAdoptionMutation,
  useShowAdoptionQuery,
} = apiSlice;
