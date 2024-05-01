import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ResetCartItemAsync } from '../cart/CartSlice';
import { selectLoggednInUser } from '../auth/authSlice';
import { resetOrder } from '../order/OrderSlice';

const OrderSuccess = () => {

    const dispatch = useDispatch()
    const params = useParams();

    const user = useSelector(selectLoggednInUser)

    useEffect(() => {
        dispatch(ResetCartItemAsync(user.id))
        dispatch(resetOrder())
    }, [dispatch,user])
    return (
        <>
            {!params.id && <Navigate to='/' replace={true}></Navigate>}
            <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-indigo-600">Wooohoooo...!!!! Order Succssfully Placed</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Order Number is : {params?.id}</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Congratulations, your order is placed</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to='/'
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back to Login
                        </Link>
                    </div>
                </div>
            </main>
        </>

    )
}

export default OrderSuccess;