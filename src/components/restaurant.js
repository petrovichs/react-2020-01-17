import React from 'react'

function Restaurant(props) {
  return (
    <div>
      <a key={props.restaurant.id}
        onClick={() => {
          props.onRestaurantChange(props.restaurant.id)
        }}
      >
        {props.restaurant.name}
      </a>
    </div>
  )
}

export default Restaurant
