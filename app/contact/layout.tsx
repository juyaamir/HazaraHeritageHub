import React from 'react'

const footerStyle = {
    backgroundColor: 'red',
    padding: '2rem',
}
const ContactLayout = ({ children}: {
    children: React.ReactNode;
}) => {
  return (
    <div className='flex justify-around'>
        <h2 className='text-[3rem]'>Column 1</h2>
        <div className='text-[3rem] text-[#cd3d3d]'>
        { children }
        </div>
        
        <h2 style={footerStyle}>Column 2</h2>
    </div>
  )
}

export default HomeLayout