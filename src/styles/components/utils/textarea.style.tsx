import styled from 'styled-components'

interface TextareaProps {
  placeholder: string
}

export const Textarea = styled.textarea<TextareaProps>`
  background: #fff;
  color: #000;
  width: 100%;
  height: 85%;
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
