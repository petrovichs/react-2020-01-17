import React from 'react'

function Review(props) {
  return (
    <div>
      {props.restaurant.reviews.map(review => (
        <div key={review.id}>
          <p>
            {review.text} ({review.user}) {review.rating}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Review
