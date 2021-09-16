import React, { FunctionComponent } from 'react'
import {
  StyledMovieCardDiv,
  StyledMovieCardImg
} from '../styles/components/moviecard.style'

interface MovieCardProps {
  imageLink: string
  key?: number
  width?: string
  height?: string
}

export const MovieCard: FunctionComponent<MovieCardProps> = props => {
  return (
    <StyledMovieCardDiv width={props.width} height={props.height}>
      <StyledMovieCardImg src={props.imageLink} alt="Test image" />
    </StyledMovieCardDiv>
  )
}

MovieCard.defaultProps = {
  width: '180px',
  height: '265px'
}
