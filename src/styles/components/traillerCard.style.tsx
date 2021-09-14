import styled from 'styled-components'

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 8px;
  margin: 48px auto 0;
  width: 560px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px ${props => props.theme.colors.primary},
    0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`

export const CardHeading = styled.h2`
  font-size: 20px;
  padding-right: 10px;
  align-self: flex-end;
  text-align: right;
  width: 88%;
  font-weight: bold;
  text-align: center;
`

export const StarsWrapping = styled.div`
  padding-left: 120px;
  display: flex;
  justify-content: flex-end;
  h1 {
    font-size: 20px;
    margin: 0 0 1rem 0;
  }
`
