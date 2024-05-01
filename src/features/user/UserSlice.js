import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchLoggedInUserOrders } from './UserApi'


const initialState = {
    status: 'idle',
    userOrder: [],
}

export const fetchLoggednInUserOrderAsync = createAsyncThunk(
    'user/fetchLoggedInUserOrders',
    async (id) => {
        const response = await fetchLoggedInUserOrders(id);
        return response.data;
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLoggednInUserOrderAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchLoggednInUserOrderAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.userOrder = action.payload
            })
    }
})

// Action creators are generated for each case reducer function

export const selectLoggedInOrder = (state) => state.user.userOrder;

export default userSlice.reducer