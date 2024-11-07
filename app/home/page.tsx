import React from 'react'
import Link from 'next/link'
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about" replace>About</Link>
      <h2>
        <Link href='/products' replace>Products</Link>
      </h2>
    </div>
  )
}

export default Home