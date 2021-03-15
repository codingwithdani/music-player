import React from 'react'
import { EmptySearch } from 'components/EmptySearch'
import { Table } from 'components/Table'
import { makeData, columns } from 'components/Table/data'
import { useSelector } from 'react-redux'
import { SearchSongContainer, QueryText } from './styles'

export const SearchSongs = () => {
  const { musicList, searchTerm } = useSelector(state => {
    const { music, search } = state
    const { musicList } = music
    const { searchTerm } = search
    return { musicList, searchTerm }
  })

  return (
    <SearchSongContainer>
      {searchTerm && musicList.length
        ? <QueryText>{`Searching "${searchTerm}"`}</QueryText>
        : <div />}
      {
        musicList && musicList.length
          ? <Table data={makeData(musicList)} columns={columns} />
          : <EmptySearch />
      }
    </SearchSongContainer>
  )
}
