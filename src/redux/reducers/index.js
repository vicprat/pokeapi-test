import { combineReducers } from '@reduxjs/toolkit'
import pokemonReducer from './pokemonReducer'

// Importa el toolkit function de Redux Toolkit
// y combina todos los reducers en un solo root reducer
export default combineReducers({
  pokemon: pokemonReducer
})
