import { createSlice } from '@reduxjs/toolkit'
import { getPokemonList, getPokemonDetails } from '../actions/pokemonActions'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemonList: [],
    pokemonDetails: null,
    isLoading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonList.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getPokemonList.fulfilled, (state, action) => {
        state.pokemonList = action.payload
        state.isLoading = false
        state.error = null
      })
      .addCase(getPokemonList.rejected, (state, action) => {
        state.pokemonList = []
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(getPokemonDetails.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getPokemonDetails.fulfilled, (state, action) => {
        state.pokemonDetails = action.payload
        state.isLoading = false
        state.error = null
      })
      .addCase(getPokemonDetails.rejected, (state, action) => {
        state.pokemonDetails = null
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export default pokemonSlice.reducer
