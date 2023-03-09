import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getPokemonList = createAsyncThunk(
  'pokemon/getPokemonList',
  async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    return response.data.results
  }
)

export const getPokemonDetails = createAsyncThunk(
  'pokemon/getPokemonDetails',
  async (pokemonId) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    return response.data
  }
)
