import Link from 'next/link'
import React from 'react'

const ProductsList = () => {
  return (
    <div>
      <h1>ProductsList</h1>
      <Link href="/products/1">
      <h2>Products 1</h2>
      </Link>
      <Link href="/products/2">
      <h2>Products 2</h2>
      </Link>
      <Link replace href="/products/3">
      <h2>Products 3</h2>
      </Link>
    </div>
  )
}

export default ProductsList
