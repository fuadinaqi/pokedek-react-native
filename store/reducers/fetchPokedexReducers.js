import {
  FETCH_POKEDEX as FETCH,
} from '../actionTypes'

export default function fetchPokedexReducer (state=[], action) {
  switch (action.type) {
    case FETCH:
      return action.payload
    default:
      return state
  }
}