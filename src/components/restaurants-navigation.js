import React from 'react'
import Restaurant from './restaurant'

function RestaurantsNavigation(props) {
  return (
    <div>
      {props.restaurants.map(restaurant => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          onRestaurantChange={props.onRestaurantChange}
        />
      ))}
    </div>
  )
}

export default RestaurantsNavigation
