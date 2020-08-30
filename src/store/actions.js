import {
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_FAILED,
  GET_RESTAURANTS_REQUEST,
} from './actionTypes'
import { GOOGLE_API_KEY, PROXY_URL } from '../constants'

export const getRestaurantsRequest = () => ({
  type: GET_RESTAURANTS_REQUEST,
})

export const getRestaurantsSuccess = (restaurants) => ({
  type: GET_RESTAURANTS_SUCCESS,
  restaurants,
})

export const getRestaurantsFailed = (error) => ({
  type: GET_RESTAURANTS_FAILED,
  error,
})

export function getRestaurantsAction(query) {
  return async (dispatch) => {
    dispatch(getRestaurantsRequest())
    return fetch(
      `${PROXY_URL}https://maps.googleapis.com/maps/api/place/textsearch/json?key=${GOOGLE_API_KEY}&type=restaurant&query=${query}&region=th`
    )
      .then((res) => res.json())
      .then(({ results }) => dispatch(getRestaurantsSuccess(results)))
      .catch((error) => dispatch(getRestaurantsFailed(error)))
  }
}
