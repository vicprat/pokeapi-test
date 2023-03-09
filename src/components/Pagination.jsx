const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className='flex justify-center'>
      <ul className='flex'>
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              className={`mx-1 font-bold ${currentPage === number ? 'text-teal-600' : 'text-gray-600'}`}
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
