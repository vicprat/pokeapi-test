import { combineReducers } from '@reduxjs/toolkit'
import pokemonReducer from './pokemonReducer'

export default combineReducers({
  pokemon: pokemonReducer
})
