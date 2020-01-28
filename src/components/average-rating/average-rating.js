import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import Reviews from '../reviews'

function AverageRating({reviews}) {
  const rawRating = useMemo(
    () => reviews.reduce((acc, {rating}) => acc + rating, 0) / reviews.length,
    [reviews]
  )

  const normalizedRating = Math.floor(rawRating * 2) / 2
  return (
    <div>
      <Rate value={normalizedRating} disabled allowHalf />
    </div>
  )
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number,
    })
  ).isRequired,
}

export default AverageRating
