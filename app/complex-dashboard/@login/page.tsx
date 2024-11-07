import Card from '@/app/components/card'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <Card>
      <div>
      <div>
       please Login to continue
      </div>
      <div className=' p-2 border' style={{border: '2px solid rgb(250,0,0)', boxShadow: '4px 4px 2px 4px, -4px -4px 2px 4px rgb(0,245,0'}}>
        <Link href='/complex-dashboard' >Sign Up</Link>
      </div>
      <div style={{
        width: 0,
        height: 0,
        borderLeft: '20px solid rgb(255,0,0)',
        borderRight: '20px solid rgb(0,255,0)',
        borderBottom: '20px solid rgb(0,0,255)',
        borderTop: '20px solid rgb(120,20,0)',
        margin: '20px'

      }}>
      </div>
      </div>

    </Card>
  )
}

export default Login