import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const PokemonDetailsPage = () => {
  const { id } = useParams() // Obtener el id del Pokemon seleccionado de los parámetros de la URL
  const pokemonList = useSelector((state) => state.pokemon.pokemonList) // Obtener la lista de Pokemon desde el estado global
  const selectedPokemon = pokemonList.find((pokemon) => pokemon.id === Number(id)) // Encontrar el objeto del Pokemon seleccionado en la lista

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white shadow-lg rounded-lg w-80 p-4'>
        <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} className='mx-auto' />
        <h1 className='text-center text-2xl font-bold mt-2'>{selectedPokemon.name}</h1>
        <div className='mt-4'>
          <h2 className='text-lg font-bold mb-2'>Abilities</h2>
          <ul>
            {selectedPokemon.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
        <div className='mt-4'>
          <h2 className='text-lg font-bold mb-2'>Stats</h2>
          <ul>
            {selectedPokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded'>
          Catch {selectedPokemon.name}
        </button>
      </div>
    </div>
  )
}

export default PokemonDetailsPage
