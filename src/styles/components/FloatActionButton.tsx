import styled from 'styled-components'

export const FloatActionButton = styled.button`
  z-index: 1;
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${props => props.theme.colors.primary};
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: ${props => props.theme.colors.primary};
  border: none;
  outline: none;
  color: ${props => props.theme.colors.text};
  font-size: 36px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.3s;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:focus {
    transform: scale(1.1);
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
`
