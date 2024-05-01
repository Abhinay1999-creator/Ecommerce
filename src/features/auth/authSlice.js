import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createUser,checkUser,UpdateUser,SignOut } from './authApi'
import { act } from '@testing-library/react';

const initialState = {
    loggedInUser: null,
    status: 'idle',
    error:null
}

export const createUserAsync = createAsyncThunk(
    'user/createUser',
    async (userData) => {
        const response = await createUser(userData);
        return response.data;
    }
)

export const createUserInfoAsync = createAsyncThunk(
    'user/checkUser',
    async (logInInfo) => {
        const response = await checkUser(logInInfo);
        return response.data;
    }
)

export const updateUserAsync = createAsyncThunk(
    'user/updateUser',
    async (update) => {
        const response = await UpdateUser(update);
        return response.data;
    }
)

export const signOutUserAsync = createAsyncThunk(
    'user/SignOut',
    async (userId) => {
        const response = await SignOut(userId);
        return response.data;
    }
)



export const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUserAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(createUserAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.loggedInUser = action.payload
            })
            .addCase(createUserInfoAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(createUserInfoAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.loggedInUser = action.payload
            })
            .addCase(createUserInfoAsync.rejected, (state, action) => {
                state.status = 'idle'
                state.error = action.error
            })
            .addCase(updateUserAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(updateUserAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.loggedInUser = action.payload
            })
            .addCase(signOutUserAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(signOutUserAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.loggedInUser = null
            })
    }
})

// Action creators are generated for each case reducer function
export const selectLoggednInUser = (state) => state.auth.loggedInUser;


export default counterSlice.reducer