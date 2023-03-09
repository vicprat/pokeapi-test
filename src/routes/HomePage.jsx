import PokemonList from '../components/PokemonList'

const HomePage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-center text-3xl font-bold text-gray-600  my-12'>Welcome to PokeApp</h1>
      <div>
        <PokemonList />
      </div>
    </div>
  )
}

export default HomePage
