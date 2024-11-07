import Card from '@/app/components/card'
import React from 'react'
import Link from 'next/link'
const Notifications = () => {
  return (
    <Card >
      <div>
      Notifications
      </div>
      <p><Link href='/complex-dashboard/archived' className='block underline'>Archived</Link></p>
    </Card>
  )
}

export default Notifications