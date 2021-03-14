import { createReducer } from '@reduxjs/toolkit'
import { addSongs } from '../actions'

export default createReducer([], builder => {
  builder
    .addCase(addSongs, (state, { payload }) => {
      const songs = payload.map(song => {
        const { artistName, artworkUrl100, previewUrl, trackId, trackName } = song
        return { artistName, artworkUrl100, previewUrl, trackId, trackName }
      })
      return songs
    })
})
