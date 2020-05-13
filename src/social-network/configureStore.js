import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import currentUser from './features/auth/slices/currentUser'
import authMiddleware from  './features/auth/middleware/auth'

const middleware  = [
   ...getDefaultMiddleware(),
       authMiddleware
]

const store = configureStore({
    reducer:{
        currentUser
    },
    middleware,
    devTools:true
})
export default store;