import {
  GET_RESTAURANTS_REQUEST,
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_FAILED,
} from '../actionTypes'

const initialState = {
  restaurants: [],
  loading: false,
  error: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RESTAURANTS_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case GET_RESTAURANTS_SUCCESS: {
      return {
        ...state,
        restaurants: action.restaurants,
        loading: false,
      }
    }
    case GET_RESTAURANTS_FAILED: {
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    }
    default:
      return state
  }
}
