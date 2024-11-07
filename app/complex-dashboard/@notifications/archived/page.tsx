import Card from '@/app/components/card'
import React from 'react'
import Link from 'next/link'
const Archived = () => {
  return (
    <Card>
        <div>
            Archived
        </div>
        <div>
            <Link href='/complex-dashboard'>Default</Link>
        </div>
    </Card>
  )
}

export default Archived