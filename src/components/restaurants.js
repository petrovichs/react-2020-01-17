import React, {useMemo, useState} from 'react'
import RestaurantsNavigation from './restaurants-navigation'
import Menu from './menu'
import Review from './review'
import { Row, Col } from 'antd';

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

        <Row>
            <Col span={6}>
                <RestaurantsNavigation
                    restaurants={props.restaurants}
                    onRestaurantChange={setActiveRestaurant}
                />
            </Col>
            <Col span={18}>
                <Menu restaurant={activeRestaurant} />
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Review restaurant={activeRestaurant} />
            </Col>
        </Row>
    </div>
  )
}

export default Restaurants
