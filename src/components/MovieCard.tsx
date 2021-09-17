import React, { FunctionComponent } from 'react'
import {
  StyledMovieCardDiv,
  StyledMovieCardImg
} from '../styles/components/moviecard.style'

interface MovieCardProps {
  imageLink: string
  key?: number
  heightProp?: string
  widthProp?: string
}

export const MovieCard: FunctionComponent<MovieCardProps> = props => {
  return (
    <StyledMovieCardDiv
      heightProp={props.heightProp}
      widthProp={props.widthProp}
    >
      <StyledMovieCardImg src={props.imageLink} alt="Test image" />
    </StyledMovieCardDiv>
  )
}

MovieCard.defaultProps = {
  heightProp: '255px',
  widthProp: '170px'
}
