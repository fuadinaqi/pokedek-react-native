import axios from 'axios'
import {
  FETCH_POKE_DETAIL as DETAIL,
  FETCH_POKE_PENDING as PENDING,
  FETCH_POKE_ERROR as ERROR
} from '../actionTypes'

export const fetchDetail = function fetchPokemonDetail (item) {
  return dispatch => {
    dispatch(getPokeDetailPending())
    axios.get('https://api.pokemontcg.io/v1/cards?name='+item.name)
      .then(({data}) => {
        dispatch(getPokeDetail(data.cards))
      })
      .catch(err => dispatch(getPokeDetailError()))
  }
}

function getPokeDetailPending () {
  return {
    type: PENDING
  }
}

function getPokeDetail (pokemonCards) {
  return {
    type: DETAIL,
    payload: pokemonCards
  }
}

function getPokeDetailError () {
  return {
    type: ERROR
  }
}