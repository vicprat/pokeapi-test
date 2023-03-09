import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import axios from 'axios'

// Get list of pokemon from PokeAPI
export const getPokemonList = createAsyncThunk(
  'pokemon/getPokemonList',
  async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
    return response.data.results
  }
)

// Get details of pokemon from PokeAPI
export const getPokemonDetails = createAsyncThunk(
  'pokemon/getPokemonDetails',
  async (url) => {
    const response = await axios.get(url)
    return response.data
  }
)

export const setPagination = createAction('pokemon/setPagination')
