import React, { FunctionComponent } from 'react'
import {
  StyledMovieCardDiv,
  StyledMovieCardImg
} from '../styles/components/moviecard.style'

interface MovieCardProps {
  imageLink: string
  key?: number
}

export const MovieCard: FunctionComponent<MovieCardProps> = props => {
  return (
    <StyledMovieCardDiv>
      <StyledMovieCardImg src={props.imageLink} alt="Test image" />
    </StyledMovieCardDiv>
  )
}
