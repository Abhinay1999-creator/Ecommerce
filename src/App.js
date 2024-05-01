import logo from './logo.svg';
import './App.css';
import Home from './features/pages/Home';
import Login from './features/auth/components/Login';
import SignUp from './features/auth/components/SignUp';
import ProductDetailPage from './features/pages/ProductDetailPage';
import { fetchCartProductByIdAsync } from '../src/features/cart/CartSlice'

import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from './features/cart/Cart';
import CartPage from './features/pages/CartPage';
import CheckOut from './features/pages/CheckOut';
import ProductDetail from './features/productlist/ProductDetail';
import Protected from './features/auth/Protected';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { selectLoggednInUser, createUserAsync } from './features/auth/authSlice'
import PageNotFound from './features/pages/PageNotFound';
import OrderSuccess from './features/pages/OrderSuccess';
import UserOrders from './features/user/components/UserOrders';
import  UserOrderPage from './features/pages/UserOrderPage';
import UserProfile from './features/user/components/UserProfile';
import UserProfilePage from './features/pages/UserProfilePage';
import SignoutPage from './features/pages/SignOutPage';
import UserRegistered from './features/pages/UserRegistered';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  // {
  //   path: "/user-registered",
  //   element: <UserRegistered></UserRegistered>,
  // },
  {
    path: "/cart",
    element: (<Protected><CartPage></CartPage></Protected>),
  },
  {
    path: "/checkout",
    element: (<Protected><CheckOut></CheckOut></Protected>),
  },
  {
    path: "/product-detail/:id",
    element: (<Protected><ProductDetailPage></ProductDetailPage></Protected>),
  },
  {
    path: "/order-success/:id",
    element: (<Protected><OrderSuccess></OrderSuccess></Protected>),
  },
  {
    path: "/orders",
    element: (<Protected><UserOrderPage></UserOrderPage></Protected>),
  },
  {
    path: "/profile",
    element: (<Protected><UserProfilePage></UserProfilePage></Protected>),
  },
  {
    path: "/signout",
    element: (<SignoutPage></SignoutPage>),
  },
  {
    path: "*",
    element: (<PageNotFound></PageNotFound>),
  },
]);


function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectLoggednInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchCartProductByIdAsync(user.id))
    }
  }, [dispatch, user])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>


  );
}

export default App;
