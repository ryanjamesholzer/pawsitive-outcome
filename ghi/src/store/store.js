import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { dogsApi } from './dogsApi'
import { authApi } from './authApi'
import { adoptionsApi } from './adoptionsApi'
import { accountSlice } from './accountSlice'


export const store = configureStore({
    reducer: {
        [dogsApi.reducerPath]: dogsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [adoptionsApi.reducerPath]: adoptionsApi.reducer,
        [accountSlice.name]: accountSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(dogsApi.middleware, authApi.middleware, adoptionsApi.middleware)
})

setupListeners(store.dispatch)
