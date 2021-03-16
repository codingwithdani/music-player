import debounce from 'just-debounce-it'
import { useDispatch } from 'react-redux'
import { fetchMusicList } from 'state/music'
import { setSearchTerm } from 'state/search'
import { useLocation } from 'wouter'
import { FilterContainer, InputStyled, Icon } from './styles'

export const Filter = () => {
  const dispatch = useDispatch()
  const [location, setLocation] = useLocation()

  const debounceDispatch = debounce(searchTerm => dispatch(fetchMusicList(searchTerm)), 500)

  const handleChange = e => {
    if (location !== '/') setLocation('/')

    debounceDispatch(e.target.value)
    dispatch(setSearchTerm(e.target.value))
  }

  return (
    <FilterContainer>
      <Icon alt='Magnify glass' src='/magnifying-glass_search-bar.svg' />
      <InputStyled data-testid='input-search' onChange={handleChange} />
    </FilterContainer>
  )
}
