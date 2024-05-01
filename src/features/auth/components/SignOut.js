import { Link, Navigate } from "react-router-dom";
import { createUserInfoAsync, selectLoggednInUser } from '../authSlice';
import { useDispatch, useSelector } from "react-redux";
import { computeHeadingLevel } from "@testing-library/react";
import React, { useEffect } from 'react';
import { signOutUserAsync } from "../authSlice";


function SignOut() {

    const dispatch = useDispatch();
    const user = useSelector(selectLoggednInUser)

    useEffect(() => {
        dispatch(signOutUserAsync())
    })
    return (<>
        {!user && <Navigate to='/login' replace={true}></Navigate>}

    </>);
}

export default SignOut;