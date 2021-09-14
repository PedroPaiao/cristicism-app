import styled from 'styled-components'

interface RowProps {
  justifyContent?: string
  alignItems?: string
  backgroundColor?: string
}
export const Row = styled.div<RowProps>`
  padding: 12px;
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  background-color: ${props => props.backgroundColor};
`
Row.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent'
}
