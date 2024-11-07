import React from 'react'
import Link from 'next/link';
const ProductPage = () => {
  return (
    <div>
        <h1>Products Page!</h1>
        <h2><Link href='/about' replace>About</Link></h2>
        <h2><Link href=''>Product 1</Link></h2>
        <h2><Link href=''>Product 2</Link></h2>

    </div>
  )
}

export default ProductPage