import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { AddToOrderAsync, UpdateItemAsync, DeleteCartItemAsync } from '../order/OrderSlice'


export default function Order() {

const dispatch = useDispatch();

    return (
        <>
           
        </>
    );
}

