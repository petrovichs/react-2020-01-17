import React, {useState} from 'react'
import Restaurant from '../restaurant'
import RestaurantsNavigation from '../restaurants-navigation'

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(props.restaurants[0].id)
  const restaurant = props.restaurants.find(
    restaurant => restaurant.id === currentId
  )
  return (
    <div>
      <RestaurantsNavigation
        restaurants={props.restaurants}
        onRestaurantChange={setCurrentId}
      />
      <Restaurant restaurant={restaurant} />
    </div>
  )
}

export default Restaurants
