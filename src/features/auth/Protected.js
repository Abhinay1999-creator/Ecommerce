import React from 'react'
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { selectLoggednInUser } from './authSlice';


export default function Protected({ children }) {
    const user = useSelector(selectLoggednInUser);
    if(!user){
        return <Navigate to='/login' replace={true}></Navigate>
    }
    return children;
}
