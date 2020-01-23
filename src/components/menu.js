import React from 'react'
import Dish from './dish'

function Menu(props) {
  const divStyle= {width: '700px', margin: '10px'};
  return (
    <div style={divStyle}>
      {props.restaurant.menu.map(dish => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  )
}

export default Menu
