// "use client"
// import React from 'react'
// import { useRouter } from 'next/navigation'


// export const OrderProduct = () => {
//     const router = useRouter()
//     const handleClick = ()=>{
//         console.log("placing your order")
//         router.push("/")
//     }
//   return (
//     <>
//         <div>OrderProduct</div>
//         <button onClick={handleClick}>Place order</button>
//     </>
//   )
// }

"use client"
import { useRouter } from 'next/navigation';

const OrderProduct = () => {
    const router = useRouter()
    const handleClick = ()=>{
        console.log("placing your order")
        router.push("/")
    }
  return (
    <div>
      OrderProduct
      <button onClick={handleClick}>Place order</button>
    </div>
  )
}

export default OrderProduct
