import {
  LOADING_IMAGE
} from '../actionTypes'

const randomLoading = [
  'https://vignette.wikia.nocookie.net/pokemon/images/6/63/Ivysaur_XY_EffectAnimation_Sprite.gif/revision/latest?cb=20141115063744',
  'https://vignette.wikia.nocookie.net/pokemon/images/7/79/Talonflame_XY.gif/revision/latest?cb=20140608152352',
  'http://www.pkparaiso.com/imagenes/xy/sprites/animados/toxicroak-3.gif',
  'http://www.pkparaiso.com/imagenes/xy/sprites/animados/absol-2.gif',
  'http://www.pkparaiso.com/imagenes/xy/sprites/animados/charizard-3.gif',
  'http://www.pkparaiso.com/imagenes/xy/sprites/animados/alakazam-2.gif',
  'http://www.pkparaiso.com/imagenes/xy/sprites/animados/haunter-3.gif'
]

export function fetchLoading () {
  let random = randomLoading[(Math.floor(Math.random()*randomLoading.length))]
  return {
    type: LOADING_IMAGE,
    payload: random
  }
}