'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const OrderProduct = () => {
    const router = useRouter();
    const handleClick = () => {
        console.log('Order placed!');
        router.forward();
    }
  return (
    <div>
        <h1>OrderProduct</h1>
        <button onClick={handleClick} className='p-2 bg-red-600 rounded-full text-white '>Place order</button>
    </div>
  )
}

export default OrderProduct