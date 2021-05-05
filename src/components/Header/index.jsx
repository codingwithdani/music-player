import React from 'react'
import { Filter } from 'components/Filter'
import { Link } from 'wouter'
import { HeaderContainer, HeaderLink, HeaderText } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Link href='/'>
        <HeaderLink>
          <HeaderText>Music Player</HeaderText>
        </HeaderLink>
      </Link>
      <Filter />
    </HeaderContainer>
  )
}
