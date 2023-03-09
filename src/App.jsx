import { Routes, Route } from 'react-router-dom'
import HomePage from './routes/HomePage'
import PokemonDetailsPage from './routes/PokemonDetailsPage'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pokemon/:id' element={<PokemonDetailsPage />} />
      </Routes>
    </>
  )
}

export default App
