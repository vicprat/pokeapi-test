import { configureStore } from '@reduxjs/toolkit'
import { pokemonSlice } from './reducers/pokemonReducer'

const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer
  }
})

export default store
