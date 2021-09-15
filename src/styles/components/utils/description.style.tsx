import styled from 'styled-components'

interface DescriptionProps {
  customPadding?: string
}

export const Description = styled.p<DescriptionProps>`
  text-align: left;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  padding: ${props => props.customPadding};
`

Description.defaultProps = {
  customPadding: '1rem 0'
}
