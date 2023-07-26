import { configureStore } from "@reduxjs/toolkit";
import characterApi from './apiSlice'
import { slice } from './slice'

export const store = configureStore({
    reducer: {
        personGet: slice.reducer,
        [characterApi.reducerPath]: characterApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(characterApi.middleware)
})