import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'
import {
  StyledMovieCardDiv,
  StyledMovieCardImg,
  Comment,
  Title,
  Description
} from '../styles/components/moviecard.style'

import { MovieCardProps } from '../interfaces/movie_interface'

export const MovieCard: FunctionComponent<MovieCardProps> = props => {
  const router = useRouter()

  const handleClick = e => {
    e.preventDefault()
    if (props.id != null) {
      router.push({
        pathname: '/movies/[id]',
        query: { id: props.id, slugSearch: props.slugSearch }
      })
    }
  }
  return (
    <StyledMovieCardDiv
      onClick={props.permitClick ? handleClick : null}
      className={props.className}
      heightProp={props.heightProp}
      widthProp={props.widthProp}
    >
      {props.showInfo ? (
        <Comment className="comment">
          <Title fontSize={props.fontSize}>{props.title}</Title>
          <Description>{props.description}</Description>
        </Comment>
      ) : null}
      <StyledMovieCardImg src={props.image_link} alt="Test image" />
    </StyledMovieCardDiv>
  )
}

MovieCard.defaultProps = {
  className: 'col-3',
  heightProp: '100%',
  widthProp: '100%',
  fontSize: '1em',
  title: 'PlaceHolder',
  description: 'PlaceHolder',
  slugSearch: 'trending',
  showInfo: true,
  permitClick: true
}
