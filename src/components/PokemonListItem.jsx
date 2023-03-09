import React from 'react'

const PokemonListItem = ({ pokemon, onClick }) => {
  return (
    <div className='p-4 w-full' onClick={onClick}>
      <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
        <div className='p-6'>
          <h2 className='tracking-widest text-xs title-font font-medium text-gray-700 '>
            {pokemon.name}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default PokemonListItem
