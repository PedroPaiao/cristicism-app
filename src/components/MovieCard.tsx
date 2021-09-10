import React from 'react';
import {
  StyledMovieCardDiv,
  StyledMovieCardImg,
} from '../styles/components/moviecard.style'

export function MovieCard({imageLink}): JSX.Element {
  return (
    <StyledMovieCardDiv>
      <StyledMovieCardImg src={imageLink} alt="Test image" />
    </StyledMovieCardDiv>
  )
}