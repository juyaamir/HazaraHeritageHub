import React from 'react'
import  Link  from 'next/link'
const F1 = () => {
  return (
    <div>
        <div>F1 Page</div>
        <div className='p-2 bg-sky-600 w-fit text-white font-semibold'>
            <Link href='/f1/f2'>go to F2</Link>
        </div>
    </div>
  )
}

export default F1