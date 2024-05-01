import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addToOrder } from '../order/OrderApi'


const initialState = {
    status: 'idle',
    orders: [],
    currentOrderPlaced: null
}

export const AddToOrderAsync = createAsyncThunk(
    'orders/addtoOrder',
    async (order) => {
        const response = await addToOrder(order);
        return response.data;
    }
)

export const counterSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        resetOrder:(state)=>{
            state.currentOrderPlaced = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(AddToOrderAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(AddToOrderAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.orders.push(action.payload)
                state.currentOrderPlaced = action.payload
                console.log(state.currentOrderPlaced)
            })
    }
})

// Action creators are generated for each case reducer function
export const {resetOrder} = counterSlice.actions;
export const selectOrderItem = (state) => state.order.orders;
export const selectCurrentOrder = (state) => state.order.currentOrderPlaced;

export default counterSlice.reducer