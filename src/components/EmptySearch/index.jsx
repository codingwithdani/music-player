import { EmptySearchContainer, EmptySearchText, Icon } from './styles'

export const EmptySearch = () => {
  return (
    <EmptySearchContainer>
      <Icon src='magnifying-glass_empty-state.svg' />
      <EmptySearchText>
        Use the search bar to find results
      </EmptySearchText>
    </EmptySearchContainer>
  )
}
