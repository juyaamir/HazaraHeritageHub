'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation';
const navLink = [
    {label: 'Login', href: '/login'},
    {label: 'Register', href: '/register'},
    {label: 'Forgot Password', href: '/forgot-password'}
];

const AuthLayout = ({ children }: {
    children: React.ReactNode
}) => {
    const pathname = usePathname();
    console.log(pathname);
    const [input, setInput ] = useState('');

  return (
    <div>
        <div>
            <input type='text' value={input} onChange={e=> setInput(e.target.value)} className='border border-red-500'/>
        </div>
        {
            navLink.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link key={link.label} href={link.href}
                    className={isActive ? 'text-red-500 mr-4': 'text-blue-500 mr-4'}
                    >{link.label}</Link>
                )
            })
        }
        {children}
    </div>
  )
}

export default AuthLayout