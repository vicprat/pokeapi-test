import { combineReducers } from '@reduxjs/toolkit'
import pokemonReducer from './pokemonReducer'

// Combine all reducers into one reducer
export default combineReducers({
  pokemon: pokemonReducer
})
