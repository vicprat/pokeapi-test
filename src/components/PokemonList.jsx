import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemonList } from '../redux/actions'

const PokemonList = () => {
  const dispatch = useDispatch()
  const pokemonList = useSelector((state) => state.pokemon.pokemonList)

  useEffect(() => {
    dispatch(getPokemonList())
  }, [dispatch])

  return (
    <div>
      <h1>Pokemon List</h1>
      <div className='grid grid-cols-3 gap-4'>
        {pokemonList.map((pokemon) => (
          <button type='button' className='bg-slate-400 p-4 rounded-lg' key={pokemon.name}>{pokemon.name}</button>
        ))}
      </div>
    </div>
  )
}

export default PokemonList
