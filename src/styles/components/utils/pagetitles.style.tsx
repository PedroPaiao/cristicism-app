import styled from 'styled-components'

export const PageTitle = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors.text};
  font-size: 2.5rem;
  padding-top: 1rem;

  @media (max-width: 425px) {
    font-size: 2rem;
  }
`

export const PageSubtitle = styled.h2`
  color: ${props => props.theme.colors.text};
  text-align: left;
  font-size: 1.75rem;
`

export const UserName = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  ${props => props.theme.colors.text};
`

export const Text = styled.p`
  font-size: 1rem;
  ${props => props.theme.colors.text};
  padding: 10px 5px;
  margin: 0;
`
