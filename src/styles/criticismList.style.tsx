import styled from 'styled-components'

export const AutorBox = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & div {
    display: flex;
    align-items: center;
  }
`
export const Criticism = styled.div`
  margin-bottom: 20px;

  & div:first-child {
    background-color: #c4c4c4;
    border-radius: 3px;
    padding: 0 5px;
    position: relative;
  }
`

export const Rate = styled.p`
  color: white;
  margin: 0;
  padding-left: 5px;
`
