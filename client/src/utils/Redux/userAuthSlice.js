import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    userInfo:localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) :null
}

const userAuthSlice = createSlice({
    name:'UserAuth',
    initialState,
    reducers:{
       setCredential:(state,action)=>{
        state.userInfo = action.payload
       }
    }
})

export const{setCredential} = userAuthSlice.actions
export const userAuthReducer = userAuthSlice.reducer
