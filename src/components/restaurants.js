import React, {useMemo, useState} from 'react'
import RestaurantsNavigation from './restaurants-navigation'
import Menu from './menu'
import Review from './review'

function Restaurants(props) {
  const [activeRestaurantId, setActiveRestaurant] = useState(
    props.restaurants[0].id
  )
  const activeRestaurant = useMemo(() => {
    return props.restaurants.find(
      restaurant => restaurant.id === activeRestaurantId
    )
  }, [activeRestaurantId, props.restaurants])
  return (
    <div>
      <RestaurantsNavigation
        restaurants={props.restaurants}
        onRestaurantChange={setActiveRestaurant}
      />
      <Menu restaurant={activeRestaurant} />
      <Review restaurant={activeRestaurant} />
    </div>
  )
}

export default Restaurants
