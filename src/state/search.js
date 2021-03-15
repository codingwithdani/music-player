import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchTerm: ''
}

// slice
const { actions, reducer } = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    }
  }
})

export const { setSearchTerm } = actions
export default reducer
