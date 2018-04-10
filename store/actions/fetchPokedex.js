import axios from 'axios'
import pokemon from '../../pokemon.json'
import {
  FETCH_POKEDEX
} from '../actionTypes'

export const fetchPokedex = function fetchPokedex () {
  return dispatch => {
    let arrPokemon = []
    pokemon['pokemon_entries'].forEach((poke, i) => {
      let obj = {
        id: i,
        name: poke.pokemon_species.name[0].toUpperCase() + poke.pokemon_species.name.substr(1)
      }
      arrPokemon.push(obj)
    })
    dispatch(getPokedex(arrPokemon))
  }
}

function getPokedex (pokedex) {
  return {
    type: FETCH_POKEDEX,
    payload: pokedex
  }
}