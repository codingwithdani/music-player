import React from 'react'
import { HeaderContainer, HeaderText } from './styles'
import { Filter } from 'components/Filter'
import { Link } from 'wouter'

export const Header = () => {
  return (
    <HeaderContainer>
      <Link href='/'><HeaderText>CornerJob Music Player</HeaderText></Link>
      <Filter />
    </HeaderContainer>
  )
}
