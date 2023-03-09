const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className='flex justify-center'>
      <ul className='flex'>
        {pageNumbers.map(number => (
          <li key={number} className='p-1'>
            <button
              className={`mx-1 px-3 py-1 rounded-full font-bold ${currentPage === number ? 'bg-teal-600 text-white' : 'bg-white text-gray-600 border border-gray-300'}`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
