import styled from 'styled-components'

interface WrapperProps {
  marginTop?: string
  width?: string
  height?: string
}

export const Wrapper = styled.div<WrapperProps>`
  margin-top: ${props => props.marginTop};
  width: ${props => props.width};
  height: ${props => props.height};
`

Wrapper.defaultProps = {
  marginTop: '0',
  width: 'unset',
  height: 'unset'
}
