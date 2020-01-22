import React from 'react'
import Restaurant from './restaurant'
import {Rate} from 'antd'

function RestaurantsNavigation(props) {
  return (
    <div>
      {props.restaurants.map(restaurant => (
        <div key={restaurant.id}>
          <Restaurant
            restaurant={restaurant}
            onRestaurantChange={props.onRestaurantChange}
          />
          {/*<Rate disabled value={restaurant.reviews.reduce((a,b) => a+b, 0)/restaurant.reviews.length}/>*/}
          {/*<Rate disabled value={restaurant.reviews.reduce((a,b) => a + b, 0).toString()} />*/}
        </div>
      ))}
    </div>
  )
}

export default RestaurantsNavigation
