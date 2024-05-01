import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { selectLoggednInUser } from '../../auth/authSlice';



export default function UserProfile() {

    const user = useSelector(selectLoggednInUser)

    const dispatch = useDispatch();

    return (
        <div>
            <div className="mx-auto bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl mt-5 my-5 text-center font-bold tracking-tight text-gray-900">
                    Name : {user.name ? user.name : "New User"}</h1>
                <h3 className="text-xl mt-5 my-5 text-center font-bold tracking-tight text-gray-900">
                    Email Address : {user.email}</h3>
            </div>
            <div className="border-t  bg-white  border-gray-200 px-4 py-6 sm:px-6">
                <p className='mt-0.5 text-sm text-gray-500'>Your Addresses :</p>
                {user.addresses.map((address) =>
                    <div className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200">
                        <div className="flex gap-x-4">
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                    {address.name}
                                </p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                    {address.street}
                                </p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                    {address.region}
                                </p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                    {address.city}
                                </p>
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">
                                    Phone: {address.phone}
                                </p>
                                <p className="text-sm leading-6 text-gray-500">
                                    Pincode: {address.pincode}
                                </p>
                            </div>
                    </div>
                )}
            </div>
        </div>
    );
}

