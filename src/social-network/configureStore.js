import {configureStore} from '@reduxjs/toolkit'
import currentUser from './features/auth/slices/currentUser'

const store = configureStore({
    reducer:{
        currentUser
    },
    devTools:true
})
export default store;