import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { fetchLoggednInUserOrderAsync } from '../UserSlice';
import { selectLoggednInUser } from '../../auth/authSlice';
import { selectLoggedInOrder } from '../UserSlice'


export default function UserOrders() {
    const orders = useSelector(selectLoggedInOrder)
    const user = useSelector(selectLoggednInUser)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLoggednInUserOrderAsync(user.id))
    }, [])

    return (
        <div>
            {orders.map((order) => (
                <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mt-8">
                        <div className="mx-auto bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
                            <h1 className="text-4xl mt-5 my-5 text-center font-bold tracking-tight text-gray-900">Order #{order.id}</h1>
                            <h3 className="text-xl mt-5 my-5 text-center font-bold tracking-tight text-gray-900">Order Status : {order.status}</h3>
                            <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                    {order.items.map((item) => (
                                        <li key={item.id} className="flex py-6">
                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img
                                                    src={item.thumbnail}
                                                    alt={item.title}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3>
                                                            <a href={item.href}>{item.title}</a>
                                                        </h3>
                                                        <p className="ml-4">{item.price}</p>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
                                                </div>
                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                    <div className="text-gray-500">
                                                        <label htmlFor="quantity" className="inlinem mr-5 text-sm font-medium leading-6 text-gray-900">QTY</label>
                                                        <span>Qty: {item.quantity}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>$ {order.totalAmount}</p>
                        </div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Items in Cart</p>
                            <p>{order.totalItems} items</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

