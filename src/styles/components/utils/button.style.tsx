import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import theme from '../../theme'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string
  value?: string
  autofocus?: boolean
}

export const Button = styled.button<ButtonProps>`
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 0.75rem;
  border: none;
  cursor: pointer;
  width: 120px;
  border-radius: 10px;
  background-color: ${props => props.backgroundColor};
  text-align: center;

  &:focus-visible {
    outline: none;
  }
`
Button.defaultProps = {
  backgroundColor: theme.colors.primary
}
