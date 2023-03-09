import { createSlice } from '@reduxjs/toolkit'
import { getPokemonList, getPokemonDetails } from '../actions/pokemonActions'

const initialState = {
  pokemonList: [],
  pokemonDetails: null,
  isLoading: false,
  error: null,
  pagination: {
    currentPage: 1,
    totalPages: null
  }
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPagination: (state, action) => {
      state.pagination = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonList.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getPokemonList.fulfilled, (state, action) => {
        state.pokemonList = action.payload.results
        state.pagination.totalPages = Math.ceil(action.payload.count / 20)
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

export const { setPagination } = pokemonSlice.actions

export default pokemonSlice.reducer
