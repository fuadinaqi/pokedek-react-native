import {
  LOADING_IMAGE
} from '../actionTypes'

export default function fetchLoadingImage (state='', action) {
  switch (action.type) {
    case LOADING_IMAGE:
      return action.payload
    default:
      return state
  }
}