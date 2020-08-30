import React from 'react'
import { GOOGLE_API_KEY } from '../constants'
import './Restaurant.css'

function Restaurant({ restaurant }) {
  const getImage = (photoreference) => {
    return `https://maps.googleapis.com/maps/api/place/photo?key=${GOOGLE_API_KEY}&photoreference=${photoreference}&maxwidth=128&maxheight=128`
  }

  return (
    <div className="card col-12 my-2">
      <div className="card-body">
        <div className="media">
          <div className="image-container mr-3">
            {restaurant?.photos?.length > 0 ? (
              <img
                src={getImage(restaurant.photos[0].photo_reference)}
                alt="..."
              />
            ) : (
              <div className="no-photo">
                <span>No Photo</span>
              </div>
            )}
          </div>
          <div className="media-body pl-3">
            <h5 className="mt-0 mb-1">{restaurant.name}</h5>
            {restaurant.formatted_address}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Restaurant
