import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PokemonDetailsPage = () => {
  const [pokemonDetails, setPokemonDetails] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setPokemonDetails(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [id])

  if (!pokemonDetails) {
    return <div>Loading...</div>
  }

  return (
    <div className='fixed inset-0  overflow-y-auto'>
      <div className='flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center'>
        <div className='fixed inset-0 transition-opacity'>
          <div className='absolute inset-0 bg-gray-500 opacity-75' />
        </div>
        <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
          <div className='flex items-center justify-center'>
            <h2 className='text-xl font-semibold text-gray-700 capitalize'>
              {pokemonDetails.name}
            </h2>

          </div>
          <div className='flex items-center justify-center'>
            <img
              className='h-48 w-48 object-contain'
              src={pokemonDetails.sprites.front_default}
              alt={pokemonDetails.name}
            />
          </div>
          <div>
            <p>Height: {pokemonDetails.height}</p>
            <p>Weight: {pokemonDetails.weight}</p>
            <p>Abilities:</p>
            <ul>
              {pokemonDetails.abilities.map((ability) => (
                <li key={ability.ability.name}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetailsPage
