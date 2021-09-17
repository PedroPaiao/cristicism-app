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
  className?: string
}

export const MovieCard: FunctionComponent<MovieCardProps> = props => {
  return (
    <StyledMovieCardDiv
      className={props.className}
      heightProp={props.heightProp}
      widthProp={props.widthProp}
    >
      <StyledMovieCardImg src={props.imageLink} alt="Test image" />
    </StyledMovieCardDiv>
  )
}

MovieCard.defaultProps = {
  className: 'col-3',
  heightProp: '100%',
  widthProp: '100%'
}
