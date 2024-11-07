import React from 'react'
import Link from 'next/link'
const StudentPage = () => {
  return (
    <div>
        <Link href='student/1'><h1>StudentPage</h1></Link>
        <Link href='student/2'><h1>StudentPage</h1></Link>
        <Link href='student/3'><h1>StudentPage</h1></Link>
        <Link href='student/4'><h1>StudentPage</h1></Link>
    </div>
  )
}

export default StudentPage