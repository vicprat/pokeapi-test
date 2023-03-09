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
      // Actualiza el valor de la propiedad pagination en el estado
      state.pagination = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
    // Obtiene todos los pokemon
      .addCase(getPokemonList.pending, (state) => {
        // Cuando se envía la acción getPokemonList, se establece isLoading en true
        // y se borra cualquier mensaje de error.
        state.isLoading = true
        state.error = null
      })
      .addCase(getPokemonList.fulfilled, (state, action) => {
        // Cuando se cumple la acción getPokemonList, establece isLoading en false
        // y borra cualquier mensaje de error. Asigna los resultados de la acción al
        // estado pokemonList y calcula el número total de páginas de la paginación
        state.pokemonList = action.payload.results
        state.pagination.totalPages = Math.ceil(action.payload.count / 20)
        state.isLoading = false
        state.error = null
      })
      .addCase(getPokemonList.rejected, (state, action) => {
        // Cuando se rechaza la acción getPokemonList, establece isLoading en false
        // y establece el mensaje de error al valor de la carga útil de la acción rechazada.
        state.pokemonList = []
        state.isLoading = false
        state.error = action.payload
      })
    // Obtiene los detalles del pokemon
      .addCase(getPokemonDetails.pending, (state) => {
        // Cuando se envía la acción getPokemonDetails, se establece isLoading en true
        // y se borra cualquier mensaje de error.
        state.isLoading = true
        state.error = null
      })
      .addCase(getPokemonDetails.fulfilled, (state, action) => {
        // Cuando se cumple la acción getPokemonDetails, establece isLoading en false
        // y borra cualquier mensaje de error. Asigna los detalles del pokemon a la propiedad
        // pokemonDetails del estado
        state.pokemonDetails = action.payload
        state.isLoading = false
        state.error = null
      })
      .addCase(getPokemonDetails.rejected, (state, action) => {
        // Cuando se rechaza la acción getPokemonDetails, establece isLoading en false
        // y establece el mensaje de error al valor de la carga útil de la acción rechazada.
        state.pokemonDetails = null
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { setPagination } = pokemonSlice.actions

export default pokemonSlice.reducer
