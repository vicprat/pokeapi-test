import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonList } from '../redux/actions/pokemonActions'
import PokemonListItem from './PokemonListItem'
import Pagination from './Pagination'
import PokemonDetailsModal from './PokemonDetailsModal'

const PokemonList = () => {
  const dispatch = useDispatch()
  const pokemonList = useSelector((state) => state.pokemon.pokemonList)
  const isLoading = useSelector((state) => state.pokemon.isLoading)
  const error = useSelector((state) => state.pokemon.error)

  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonsPerPage] = useState(20)
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  // Calcular el índice del último pokemon en la página actual
  const indexOfLastPokemon = currentPage * pokemonsPerPage
  // Calcular el índice del primer pokemon en la página actual
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
  // Obtener la página actual de pokemon
  const currentPokemons = pokemonList.slice(indexOfFirstPokemon, indexOfLastPokemon)

  // Cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // obtener el detalle de un pokemon al hacer click en el nombre
  const handlePokemonClick = async (pokemonUrl) => {
    const response = await fetch(pokemonUrl)
    const data = await response.json()
    setSelectedPokemon(data)
  }

  // Obtener la lista de pokemon en el montaje inicial del componente
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
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {currentPokemons.map((pokemon) => (
          <PokemonListItem onClick={() => handlePokemonClick(pokemon.url)} key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(pokemonList.length / pokemonsPerPage)}
        onPageChange={handlePageChange}
      />
      {selectedPokemon && (
        <PokemonDetailsModal pokemonDetails={selectedPokemon} onClose={() => setSelectedPokemon(null)} />
      )}
    </div>
  )
}

export default PokemonList
