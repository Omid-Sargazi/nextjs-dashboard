import React from 'react'

const ProductsDetails = ({params}:{
    params:{productId:string}
}) => {
  return (
    <div>
      ProductsDetails{params.productId}
    </div>
  )
}

export default ProductsDetails
