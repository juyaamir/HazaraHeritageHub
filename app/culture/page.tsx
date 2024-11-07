
import React from 'react'



const Culture = () => {
  
const data = 'Culture Page';

  return (
    <div className='flex items-center justify-center h-screen'>
      { data && <div className='h-20 w-full mx-auto flex items-center justify-center text-[2rem] bg-green-400 font-bold'>{data}</div> }
    </div>
  )
}

export default Culture