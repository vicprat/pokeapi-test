// importa la función configureStore de la biblioteca @reduxjs/toolkit
// importa el rootReducer del archivo de reducers
// crea una nueva tienda utilizando la función configureStore y pasa el rootReducer
// exporta el store

import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer
})

export default store
