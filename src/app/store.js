import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import productReducer from '../features/productlist/ProductListSlice'
import cartReducer from '../features/cart/CartSlice'
import orderReducer from '../features/order/OrderSlice'
import userReducer from '../features/user/UserSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    cart: cartReducer,
    order:orderReducer,
    user:userReducer
  },
})

