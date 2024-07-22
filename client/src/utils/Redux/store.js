import {configureStore} from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'
import { userAuthReducer } from './userAuthSlice'
import { adminAuthReducer } from './adminAuthSlice'
import { userApiSlices } from './userApiSlices'

const store=configureStore({

    reducer:{
        [userApiSlices.reducerPath]:userApiSlices.reducer,
        userAuth:userAuthReducer,
        adminAuth:adminAuthReducer,
    },

    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
        devTools:true

})

export default store