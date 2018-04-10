import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import {
  pokedex,
  pokemonCards,
  loadingImage
} from './reducers'

const storeReducers = combineReducers({
  pokedex,
  pokemonCards,
  loadingImage
})

export default store = createStore(
  storeReducers,
  applyMiddleware(thunk)
)