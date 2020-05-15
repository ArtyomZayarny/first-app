import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import apiClient from '../../../api-client'


const login = createAsyncThunk(
    'currentUser/login',
    async (credentials) => {
        console.log(credentials);
        
        const response = await apiClient.post('/auth', credentials);
        console.log(response);
        
        return response.data
    }                   
   

)


const currentUserSlice = createSlice({
    name:'currentUser',
    initialState:{
        user:null,
        isLoading:false
    },
    reducers: {
        logout(state,action){
            state.user = null;
            state.isLoading = false;
        }
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.loading = true
          },
          [login.fulfilled]: (state, action) => {
            // Add user to the state array
            state.user = action.payload;
            state.isLoading = false;
          },
    }
})

const  {logout} = currentUserSlice.actions;

export {login, logout}
export default currentUserSlice.reducer

