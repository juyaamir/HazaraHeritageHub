import React from 'react'

const ReviewDetails = async ({ params }: {
    params: {
        reviewId: string,
        historyTitle: string,
    }
}) => {
    const paramsAwaited = await params;
    console.log(paramsAwaited);
  return (
    <div> History id is: { paramsAwaited.historyTitle} ReviewDetails { paramsAwaited.reviewId}</div>
  )
}

export default ReviewDetails