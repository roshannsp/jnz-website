import React from 'react'
import { Map as GoogleMap, GoogleApiWrapper, Marker } from 'google-maps-react'
import { GOOGLE_API_KEY } from '../constants'
const mapStyles = {
  width: '100%',
  height: '100%',
}

const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '80vh',
}

function Map({ google }) {
  const jenosizePos = {
    lat: 13.8939743,
    lng: 100.5163523,
  }
  return (
    <GoogleMap
      google={google}
      zoom={17}
      containerStyle={containerStyle}
      style={mapStyles}
      initialCenter={jenosizePos}
    >
      <Marker
        title={
          'JENOSIZE Digital Group | Full Service Digital Agency in Thailand , Social Media Agency'
        }
        name={'JENOSIZE'}
        position={jenosizePos}
      />
    </GoogleMap>
  )
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY,
})(Map)
