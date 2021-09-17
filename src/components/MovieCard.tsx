import React, { FunctionComponent } from 'react'
import {
  StyledMovieCardDiv,
  StyledMovieCardImg,
  Comment,
  Title,
  Description
} from '../styles/components/moviecard.style'

interface MovieCardProps {
  imageLink: string
  key?: number
  heightProp?: string
  widthProp?: string
  fontSize?: string
  title?: string
  description?: string
  className?: string
}

export const MovieCard: FunctionComponent<MovieCardProps> = props => {
  return (
    <StyledMovieCardDiv
      className={props.className}
      heightProp={props.heightProp}
      widthProp={props.widthProp}
    >
      <Comment className="comment">
        <Title fontSize={props.fontSize}>{props.title}</Title>
        <Description>{props.description}</Description>
      </Comment>
      <StyledMovieCardImg src={props.imageLink} alt="Test image" />
    </StyledMovieCardDiv>
  )
}

MovieCard.defaultProps = {
  className: 'col-3',
  heightProp: '100%',
  widthProp: '100%',
  fontSize: '1em',
  title: 'PlaceHolder',
  description: 'PlaceHolder'
}
