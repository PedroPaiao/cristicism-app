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

  &.cardMovieMobile {
    @media (max-width: 768px) {
      width: 45%;
      margin-left: 25%;

      p {
        text-align: center;
      }
    }
    @media (max-width: 425px) {
      width: 60%;
      margin-left: 20%;
    }
  }
`

Wrapper.defaultProps = {
  marginTop: '0',
  width: 'unset',
  height: 'unset'
}
