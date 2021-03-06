import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  position: fixed;
  background: ${props => props.theme.colors.background};
  transition: background 1s ease;
  -webkit-transition: background 1s ease;
  z-index: 99999999;

  &.headerColor {
    background: transparent;
  }

  &.headerColorScroll,
  &:hover {
    background: rgb(18, 18, 20, 0.85);
  }

  a {
    text-decoration: none;
    letter-spacing: 0.02rem;
    font-weight: 600;
    color: ${props => props.theme.colors.text};
    &:hover,
    h1:hover {
      color: ${props => props.theme.colors.primary};
      transition: color 0.75s ease;
      -webkit-transition: color 0.75s ease;
      -moz-transition: color 0.75s ease;
      -o-transition: color 0.75s ease;
    }
  }
`

export const Logo = styled.img`
  max-width: 2rem;
  max-height: 2rem;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  font-family: Graphik-Regular-Web, sans-serif;
  letter-spacing: 0.05rem;
  margin-left: 0.5rem;
  margin-bottom: 0;
  color: ${props => props.theme.colors.text};

  @media (max-width: 645px) {
    display: none;
  }
`
export const BoxTitle = styled.div`
  display: inline-flex;
  align-items: center;
`

export const BoxLinks = styled.nav`
  display: flex;
  align-items: center;
  position: relative;

  a {
    font-size: 0.85rem;
    margin-right: 0.95rem;
    text-transform: uppercase;
    line-height: 1rem;
  }

  svg {
    position: absolute;
    right: 5px;
    color: ${props => props.theme.colors.text};
  }
`

export const SearchBar = styled.input`
  border-radius: 10px;
  border-style: unset;
  font-size: 0.85rem;
  line-height: 1rem;
  padding: 0.25rem 0.5rem 0.25rem 0.7rem;
  background: rgba(195, 195, 195, 0.26);
  color: ${props => props.theme.colors.text};
  &:focus-visible {
    outline: unset;
  }
`
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  p {
    margin: 0;
    font-weight: 600;
  }

  svg {
    cursor: pointer;
    font-size: 14px;
    margin-left: 6px;
  }
`
