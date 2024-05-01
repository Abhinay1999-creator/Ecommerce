import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addToCart, fetchItemsById, UpdateCart,DeleteCartItem, ResetCartItems } from '../cart/CartApi'


const initialState = {
    status: 'idle',
    items: []
}

export const AddToCartAsync = createAsyncThunk(
    'cart/addtoCart',
    async (item) => {
        const response = await addToCart(item);
        return response.data;
    }
)

export const fetchCartProductByIdAsync = createAsyncThunk(
    'cart/fetchCartProductById',
    async (userId) => {
        const response = await fetchItemsById(userId);
        return response.data;
    }
)

export const UpdateItemAsync = createAsyncThunk(
    'user/updateItem',
    async (update) => {
        const response = await UpdateCart(update);
        return response.data;
    }
)

export const DeleteCartItemAsync = createAsyncThunk(
    'user/deleteItem',
    async (itemId) => {
        const response = await DeleteCartItem(itemId);
        return response.data;
    }
)

export const ResetCartItemAsync = createAsyncThunk(
    'user/resetItem',
    async (userId) => {
        const response = await ResetCartItems(userId);
        return response.data;
    }
)

export const counterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(AddToCartAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(AddToCartAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.items.push(action.payload)
            })
            .addCase(fetchCartProductByIdAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchCartProductByIdAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.items = action.payload
            })
            .addCase(UpdateItemAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(UpdateItemAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                const index = state.items.findIndex(item => item.id === action.payload.id)
                state.items[index] = action.payload
            })
            .addCase(DeleteCartItemAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(DeleteCartItemAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                const index = state.items.findIndex(item => item.id === action.payload.id)
                state.items.splice(index,1);
            })
            .addCase(ResetCartItemAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(ResetCartItemAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.items = []
            })
    }
})

// Action creators are generated for each case reducer function
export const selectCartItem = (state) => state.cart.items;


export default counterSlice.reducer