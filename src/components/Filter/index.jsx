import debounce from 'just-debounce-it'
import { useDispatch } from 'react-redux'
import { fetchMusicList } from 'state/music'
import { setSearchTerm } from 'state/search'
import { FilterContainer, InputStyled, Icon } from './styles'

export const Filter = () => {
  const dispatch = useDispatch()

  const debounceDispatch = debounce(searchTerm => dispatch(fetchMusicList(searchTerm)), 500)

  const handleChange = e => {
    debounceDispatch(e.target.value)
    dispatch(setSearchTerm(e.target.value))
  }

  return (
    <FilterContainer>
      <Icon src='magnifying-glass_search-bar.svg' />
      <InputStyled data-testid='input-search' onChange={handleChange} />
    </FilterContainer>
  )
}
