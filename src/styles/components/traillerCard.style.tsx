import styled from 'styled-components'

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 560px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px ${props => props.theme.colors.primary},
    0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`
