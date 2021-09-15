import styled from 'styled-components'

interface ContainerProps {
  height?: string
  width?: string
  backgroundColor?: string
}

export const Container = styled.div<ContainerProps>`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: ${props => props.width};
  height: ${props => (props.height ? props.height : 'auto')};
  background-color: ${props => props.backgroundColor};
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`
Container.defaultProps = {
  width: '1170',
  height: 'auto',
  backgroundColor: 'transparent'
}

export const Wrapper = styled.div`
  display: block;
`
