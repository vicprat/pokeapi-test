import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPagination } from '../api/pokemon/pokemonSlice'

const Pagination = () => {
  const dispatch = useDispatch()
  const currentPage = useSelector(state => state.pokemon.pagination.currentPage)
  const totalPages = useSelector(state => state.pokemon.pagination.totalPages)

  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  const handlePageClick = (page) => {
    dispatch(setPagination({ currentPage: page }))
  }

  return (
    <div className='flex justify-center space-x-2'>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
          className={`px-2 py-1 rounded-full ${currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600 hover:bg-gray-400'}`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  )
}

export default Pagination
