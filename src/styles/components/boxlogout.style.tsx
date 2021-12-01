import styled from 'styled-components'

export const BoxLogout = styled.div`
  position: absolute;
  bottom: -45px;
  right: 0;
  height: auto;
  padding: 5px 8px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;

  ul {
    list-style: none;
    padding: 0 1rem;
    margin: 0;
    cursor: pointer;

    li {
      padding: 5px 0;
      font-weight: 600;
    }
  }
`
