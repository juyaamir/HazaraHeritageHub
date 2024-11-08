import React from 'react'
interface CardProps {
    children: React.ReactNode,
}
const Card:React.FC<CardProps> = ({ children }) => {
  return (
    <div className='border border-gray-500 rounded-md'>
        {children}
    </div>
  )
}

export default Card