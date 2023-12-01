import { configureStore } from '@reduxjs/toolkit'
import navbarSlice from '../feature/navbarSlice'

export const store = configureStore({
  reducer: {
    navbar : navbarSlice,
  },
})