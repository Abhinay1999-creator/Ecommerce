import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, Navigate } from 'react-router-dom';
import { selectLoggednInUser } from '../auth/authSlice';

const UserRegistered = () => {

    return (
        <>
            <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="text-center">
                    <p className="font-semibold text-indigo-600 text-4xl">Wooohoooo...!!!! You are Registered Now</p>

            
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to='/'
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <p>Go back to Login</p>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default UserRegistered;