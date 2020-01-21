import React from 'react'

function Dish(props) {
  return (
    <div>
      <p>{props.dish.name}</p>
      <p>{props.dish.price}</p>
    </div>
  )
}

export default Dish
