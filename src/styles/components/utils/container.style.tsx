import styled from 'styled-components'

interface ContainerProps {
  height?: string
  width?: string
  backgroundColor?: string
  fluid?: boolean
}

export const Container = styled.div<ContainerProps>`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: ${props => (props.fluid ? '0' : 'auto')};
  margin-left: ${props => (props.fluid ? '0' : 'auto')};
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
  @media (min-width: 768px) {
    width: ${props => (props.fluid ? '100%' : '750px')};
  }
  @media (min-width: 992px) {
    width: ${props => (props.fluid ? '100%' : '970px')};
  }
  @media (min-width: 1200px) {
    width: ${props => (props.fluid ? '100%' : '1170px')};
  }
`

Container.defaultProps = {
  width: '100%',
  height: 'auto',
  backgroundColor: 'transparent',
  fluid: false
}
