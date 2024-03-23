import Link from 'next/link'
import React from 'react'

const ProductsList = () => {
  return (
    <div>
      <h1>ProductsList</h1>
      <Link href="/products/1">
      <h2>Products 1</h2>
      </Link>
      <h2>Products 2</h2>
      <h2>Products 3</h2>
    </div>
  )
}

export default ProductsList
