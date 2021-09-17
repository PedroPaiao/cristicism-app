import styled from 'styled-components'

interface InputProps {
  type: string
  placeholder: string
  width?: number
}

export const Input = styled.input<InputProps>`
  background: #fff;
  color: ${props => props.color};
  margin-bottom: 0;
  text-transform: uppercase;
  width: ${props => props.width};
  border-radius: 5px;
  border-color: transparent;
  box-shadow: 0px;
  padding: 0.5rem 0.75rem;
  outline: none;
  transition: 0.15s;
  &:active {
    background-color: ${props => props.theme.colors.secondary};
  }
`
