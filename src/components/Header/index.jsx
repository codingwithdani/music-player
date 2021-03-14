import React from 'react'
import { Filter } from 'components/Filter'
import { Link } from 'wouter'
import { HeaderContainer, HeaderText } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Link href='/'><HeaderText>CornerJob Music Player</HeaderText></Link>
      <Filter />
    </HeaderContainer>
  )
}
