import React from 'react'
import { BsFillCaretDownFill, BsSearch } from 'react-icons/bs'
import { checkClass } from '../services/checkClass'
import getLocalStorage from '../services/localstorage'
import { useModal } from '../services/useModal'
import {
  Header,
  BoxTitle,
  Logo,
  Title,
  BoxLinks,
  SearchBar,
  UserInfo
} from '../styles/components/header.style'
import Logout from './Logout'

const userLoggedIn = getLocalStorage()

export default function MainHeader(): JSX.Element {
  const { isShown, toggle } = useModal()
  checkClass()
  return (
    <Header>
      <BoxTitle>
        <a href="/">
          <Logo src="/logo.png" alt="CriticismApp Logo" />
        </a>
        <a href="/">
          <Title>CriticismApp</Title>
        </a>
      </BoxTitle>
      <BoxLinks>
        <a href="/movies">Filmes</a>
        <a href="#">Criticas</a>
        <SearchBar placeholder="Encontre um filme"></SearchBar>
        <BsSearch />
      </BoxLinks>
      {userLoggedIn ? (
        <UserInfo>
          <p>Olá, {userLoggedIn?.name}</p>
          <BsFillCaretDownFill onClick={toggle} />
          <Logout isShown={isShown} />
        </UserInfo>
      ) : null}
    </Header>
  )
}
