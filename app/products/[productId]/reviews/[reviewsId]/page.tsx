import React from 'react'
import {notFound} from "next/navigation"

const ReviewDetail = ({params}:{
    params:{
        productId:string
        reviewsId:string,
    }
}) => {
    if((parseInt(params.reviewsId)>1000)){
        notFound()

    }
  return (
    <div>
      Review {params.reviewsId} for prodcut {params.productId}
    </div>
  )
}

export default ReviewDetail
