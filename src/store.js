import { configureStore } from '@reduxjs/toolkit'
import { musicReducers } from './state'

export const store = configureStore({
  reducer: {
    music: musicReducers
  }
})
