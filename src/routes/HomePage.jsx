import { useTranslation } from 'react-i18next'
import PokemonList from '../components/PokemonList'

const HomePage = () => {
  const { t } = useTranslation()
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className=''>{t('title')}</h1>
      <input placeholder={t('searchPlaceholder')} />
      <div>
        <h1>{t('pokemonList')}</h1>
        <PokemonList />
      </div>
    </div>
  )
}

export default HomePage
