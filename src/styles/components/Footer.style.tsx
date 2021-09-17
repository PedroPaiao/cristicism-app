import styled from 'styled-components'

export const Footer = styled.footer`
  height: 170px;
  width: 100%;
  display: block;
  bottom: 0%;
  background-color: #56565a;
  color: #fff;
  padding: 3em;
  text-align: center;
`
export const SocialItem = styled.li`
  padding-right: 1em;
  margin-bottom: 2em;
  display: inline;
  justify-content: center;
  list-style-type: none;
  margin: 1 em;
`
export const SocialItemContent = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.colors.primary};
    transition: color 0.75s ease;
    -webkit-transition: color 0.75s ease;
    -moz-transition: color 0.75s ease;
    -o-transition: color 0.75s ease;
  }
`
export const SocialList = styled.ul`
  &:first-child {
    font-size: 20px;
  }
  &:last-child {
    font-size: 10px;
    color: rgba(255, 255, 255, 0.7);
  }
  margin-bottom: 10px;
`
