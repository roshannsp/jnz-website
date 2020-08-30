import React from 'react'
import Restaurant from './Restaurant'

function RestaurantList({ restaurants }) {
  return (
    <div className="row">
      {restaurants?.length > 0 ? (
        restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.place_id}
            restaurant={restaurant}
          ></Restaurant>
        ))
      ) : (
        <h3 className="text-center col-12">No restaurant found</h3>
      )}
    </div>
  )
}

export default RestaurantList
