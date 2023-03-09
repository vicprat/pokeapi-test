import { createSlice } from '@reduxjs/toolkit'
import { getPokemonList, getPokemonDetails, setPagination } from '../actions'

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
        // cuando se envía la acción getPokemonList, se establece isLoading en true
        // y se borra cualquier mensaje de error.
        state.isLoading = true
        state.error = null
      })
      .addCase(getPokemonList.fulfilled, (state, action) => {
        // cuando se cumple la acción getPokemonList, establece isLoading en false
        // y borra cualquier mensaje de error
        state.pokemonList = action.payload
        state.isLoading = false
        state.error = null
      })
      .addCase(getPokemonList.rejected, (state, action) => {
        // cuando se rechaza la acción getPokemonList, se establece isLoading en false
        // y se establece el mensaje de error en el payload de la acción rechazada
        state.pokemonList = []
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(getPokemonDetails.pending, (state) => {
        // cuando se envía la acción getPokemonDetails, se establece isLoading en true
        // y se borra cualquier mensaje de error
        state.isLoading = true
        state.error = null
      })
      .addCase(getPokemonDetails.fulfilled, (state, action) => {
        // cuando se cumple la acción getPokemonDetails, se establece isLoading en false
        // y se borra cualquier mensaje de error
        state.pokemonDetails = action.payload
        state.isLoading = false
        state.error = null
      })
      .addCase(getPokemonDetails.rejected, (state, action) => {
        // cuando se rechaza la acción getPokemonDetails, se establece isLoading en false
        // y se establece el mensaje de error en el payload de la acción rechazada
        state.pokemonDetails = null
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(setPagination, (state, action) => {
        // cuando se envía la acción setPagination, se establece el valor de paginación
        // en el estado en el payload de la acción
        state.pagination = action.payload
      })
  }
})

export default pokemonSlice.reducer
