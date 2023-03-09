import PokemonList from '../components/PokemonList'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-center text-3xl font-bold text-gray-600  my-12'>Welcome to PokeApp</h1>
      <div className='flex flex-row justify-center items-center'>
        <Link
          to='https://github.com/vicprat/pokeapi-test'
          className='focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
        >
          <span className='text-gray-800 text-lg underline'>Github Repository</span>
        </Link>
      </div>

      <div>
        <PokemonList />
      </div>
    </div>
  )
}

export default HomePage
