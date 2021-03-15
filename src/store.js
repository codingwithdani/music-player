import { configureStore } from '@reduxjs/toolkit'
import { musicReducers, searchReducers } from './state'

export const store = configureStore({
  reducer: {
    music: musicReducers,
    search: searchReducers
  }
})
