import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getMusicList } from 'services'

const initialState = {
  musicList: [],
  currentRequestId: '',
  loading: false,
  error: ''
}

// thunk
export const fetchMusicList = createAsyncThunk(
  'music/getMusicList',
  getMusicList
)

// slice
const { reducer } = createSlice({
  name: 'music',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMusicList.pending]: (state, { meta }) => {
      state.currentRequestId = meta
      state.loading = true
    },

    [fetchMusicList.fulfilled]: (state, { meta, payload }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.musicList = payload
        state.loading = false
        state.currentRequestId = ''
      }
    },

    [fetchMusicList.rejected]: (state, { meta, payload, error }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.currentRequestId = meta
        state.loading = false
        state.musicList = payload
        state.error = error
      }
    }
  }
})

export default reducer
