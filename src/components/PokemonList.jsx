import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonList } from '../redux/actions/pokemonActions'
import PokemonListItem from './PokemonListItem'
import Pagination from './Pagination'

const PokemonList = () => {
  const dispatch = useDispatch()
  const pokemonList = useSelector((state) => state.pokemon.pokemonList)
  const isLoading = useSelector((state) => state.pokemon.isLoading)
  const error = useSelector((state) => state.pokemon.error)

  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonsPerPage] = useState(20)

  // Calculate index of last pokemon on current page
  const indexOfLastPokemon = currentPage * pokemonsPerPage
  // Calculate index of first pokemon on current page
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
  // Get current page of pokemons
  const currentPokemons = pokemonList.slice(indexOfFirstPokemon, indexOfLastPokemon)

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // Fetch pokemon list on initial load
  useEffect(() => {
    dispatch(getPokemonList())
  }, [dispatch])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <div className='grid grid-cols-3'>
        {currentPokemons.map((pokemon) => (
          <PokemonListItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(pokemonList.length / pokemonsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default PokemonList
