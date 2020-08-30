import React from 'react'
import { useSelector } from 'react-redux'
import RestaurantList from '../components/RestaurantList'
import { getRestaurants } from '../store/selectors'

function Restaurants() {
  const { restaurants } = useSelector(getRestaurants)
  return (
    <div>
      <RestaurantList restaurants={restaurants}></RestaurantList>
    </div>
  )
}

export default Restaurants
