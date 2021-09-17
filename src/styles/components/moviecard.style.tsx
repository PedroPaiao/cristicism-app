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

  @media (max-width: 1400px) {
    width: 130px;
    height: 180px;
  }

  @media (max-width: 800px) {
    width: 146px;
    height: 194px;
  }

  @media (min-width: 801px) and (max-width: 1200px) {
    width: 196px;
    height: 234px;
  }
  @media (min-width: 1201px) and (max-width: 1600px) {
    width: 136px;
    height: 200px;
  }
`

export const StyledMovieCardImg = styled.img`
  width: 100%;
  height: 100%;
`
