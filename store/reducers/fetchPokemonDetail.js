import {
  FETCH_POKE_DETAIL as DETAIL,
  FETCH_POKE_PENDING as PENDING,
  FETCH_POKE_ERROR as ERROR
} from '../actionTypes'

const initialState = {
  lists: [],
  loading: false,
  error: false
}

export default function fetchPokemonDetail (state={...initialState}, action) {
  switch (action.type) {
    case PENDING:
      return ({
        ...state,
        loading: true,
        error: false
      })
    case DETAIL:
      return ({
        ...state,
        lists: action.payload,
        loading: false,
        error: false
      })
    case ERROR:
      return ({
        ...state,
        loading: false,
        error: true
      })
    default:
      return state
  }
}