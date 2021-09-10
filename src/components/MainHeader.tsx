import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { checkClass } from '../services/checkClass'
import {
  Header,
  BoxTitle,
  Logo,
  Title,
  BoxLinks,
  SearchBar
} from '../styles/components/header.style'

export default function MainHeader(): JSX.Element {
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
        <a href="#">Filmes</a>
        <a href="#">Criticas</a>
        <SearchBar placeholder="Encontre um filme"></SearchBar>
        <BsSearch />
      </BoxLinks>
    </Header>
  )
}
