import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import axios from 'axios'

// Llama a la lista de Pokemons
export const getPokemonList = createAsyncThunk(
  'pokemon/getPokemonList',
  async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    return response.data.results
  }
)

// Llama datos especificos de un Pokemon
export const getPokemonDetails = createAsyncThunk(
  'pokemon/getPokemonDetails',
  async (pokemon) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    return response.data
  }
)

// Set de la paginacion
export const setPagination = createAction('pokemon/setPagination')
