import styled from 'styled-components'

interface WrapperProps {
  marginTop?: string
}

export const Wrapper = styled.div<WrapperProps>`
  margin-top: ${props => props.marginTop};
`

Wrapper.defaultProps = {
  marginTop: '0'
}
