import React from 'react';
import { Metadata } from 'next';


type Props = {
  params:{
    productId:string
  }
}
export const generateMetadata = async ({params}:Props):Promise<Metadata>=>{
  const title = await new Promise(resolve=>{
    setTimeout(()=>{
      resolve(`iPhone ${params.productId}`)
    })
  })
  return {
    title:`Product ${title}`
  }
}

const ProductsDetails = ({params}:Props) => {
  return (
    <div>
      ProductsDetails{params.productId}
    </div>
  )
}

export default ProductsDetails
