import React from 'react'
import { EmptySearch } from 'components/EmptySearch'
import { Table } from 'components/Table'
import { makeData, columns } from 'components/Table/data'
import { useSelector } from 'react-redux'

export const SearchSongs = () => {
  const { musicList } = useSelector(state => state.music)
  return (
    <>
      {
        musicList && musicList.length
          ? <Table data={makeData(musicList)} columns={columns} />
          : <EmptySearch />
      }
    </>
  )
}
