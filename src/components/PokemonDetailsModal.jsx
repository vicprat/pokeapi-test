import React from 'react'
import { useNavigate } from 'react-router-dom'

const PokemonDetailsModal = ({ pokemonDetails, onClose }) => {
  const navigate = useNavigate()

  const handleMoreDetailsClick = () => {
    navigate(`/pokemon/${pokemonDetails.id}`)
    onClose()
  }

  return (
    <div className='fixed inset-0 z-10 overflow-y-auto'>
      {pokemonDetails && (
        <div className='flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center'>
          <div className='fixed inset-0 transition-opacity'>
            <div className='absolute inset-0 bg-gray-500 opacity-75' />
          </div>
          <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
            <div className='flex items-center justify-between'>
              <h2 className='text-xl font-semibold text-gray-700 capitalize'>
                {pokemonDetails.name}
              </h2>

              <button
                className='text-gray-500 hover:text-gray-700 focus:outline-none'
                onClick={onClose}
              >
                X
              </button>
            </div>
            <div className='flex items-center justify-center'>
              <button onDoubleClick={handleMoreDetailsClick}>

                <img
                  className='h-48 w-48 object-contain'
                  src={pokemonDetails.sprites.front_default}
                  alt={pokemonDetails.name}
                />
              </button>
            </div>
            <div className='text-center'>
              <p className='text-gray-500'>Double click to more details on Pokemon</p>
              <p className='text-gray-600'>or</p>
              <button className='hover:text-gray-500' onDoubleClick={handleMoreDetailsClick}>Double Click Here</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PokemonDetailsModal
