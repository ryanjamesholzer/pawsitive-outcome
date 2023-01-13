import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { dogsApi } from './dogsApi'


export const store = configureStore({
    reducer: {
        [dogsApi.reducerPath]: dogsApi.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(dogsApi.middleware),
})

setupListeners(store.dispatch)