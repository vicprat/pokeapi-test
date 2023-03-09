import React from 'react'

const PokemonListItem = ({ pokemon, onClick }) => {
  return (
    <div className='p-4 w-full cursor-pointer' onClick={onClick}>
      <div className='h-full bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden'>
        <div className='p-6'>
          <h2 className='text-lg font-medium text-gray-700 capitalize'>
            {pokemon.name}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default PokemonListItem
