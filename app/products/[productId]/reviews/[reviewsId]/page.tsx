import React from 'react'

const ReviewDetail = ({params}:{
    params:{
        productId:string
        reviewsId:string,
    }
}) => {
  return (
    <div>
      Review {params.reviewsId} for prodcut {params.productId}
    </div>
  )
}

export default ReviewDetail
