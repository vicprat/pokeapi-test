import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonList } from '../redux/actions/pokemonActions'

import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const { t } = useTranslation()

  const pokemonList = useSelector(state => state.pokemon.pokemonList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemonList())
  }, [dispatch])

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className=''>{t('title')}</h1>
      <input placeholder={t('searchPlaceholder')} />
      <div>
        <h1>{t('pokemonList')}</h1>
        <ul>
          {pokemonList.map(pokemon => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HomePage
