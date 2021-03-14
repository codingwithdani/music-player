import { FilterContainer, InputStyled, Icon } from './styles'
import { useDispatch } from 'react-redux'
import { fetchMusicList } from 'state/music'
import debounce from 'just-debounce-it'

export const Filter = () => {
  const dispatch = useDispatch()

  const debounceDispatch = debounce(searchTerm => dispatch(fetchMusicList(searchTerm)), 500)

  const handleChange = e => {
    debounceDispatch(e.target.value)
  }

  return (
    <FilterContainer>
      <Icon src='magnifying-glass_search-bar.svg' />
      <InputStyled onChange={handleChange} />
    </FilterContainer>
  )
}
