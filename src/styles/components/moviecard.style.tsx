import styled from 'styled-components'

interface StyledMovieCardProps {
  width?: string
  height?: string
}

export const MovieListWrapper = styled.div`
  padding: 10px 0;
`

export const ListTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 32px;
`

interface StyledMovieCardProps {
  heightProp: string
  widthProp: string
}

export const StyledMovieCardDiv = styled.div<StyledMovieCardProps>`
  width: ${props => props.widthProp};
  height: ${props => props.heightProp};
`

export const StyledMovieCardImg = styled.img`
  width: 100%;
  height: 100%;
`
