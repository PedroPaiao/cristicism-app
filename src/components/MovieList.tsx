import React, { FunctionComponent } from 'react'
import { getFilms } from '../services/handleMovies'
import { MovieCard } from '../components/MovieCard'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import {
  ListTitle,
  MovieListWrapper
} from '../styles/components/moviecard.style'
import { Wrapper } from '../styles/components/utils/wrapper.style'

interface Movie {
  title: string
  description: string
  imageLink: string
}

interface MovieListProps {
  movies?: Movie[]
  slug?: string
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

export const MovieList: FunctionComponent<MovieListProps> = (
  props: MovieListProps
) => {
  const movies = getFilms({ slug: props.slug })

  return (
    <MovieListWrapper>
      <ListTitle>{movies.slug}</ListTitle>
      <Carousel responsive={responsive} infinite={true}>
        {movies.movies.map((movie, key) => {
          return (
            <Wrapper width="90%" height="100%" key={key}>
              <MovieCard
                key={key}
                imageLink={movie.imageLink}
                showInfo={false}
              ></MovieCard>
            </Wrapper>
          )
        })}
      </Carousel>
    </MovieListWrapper>
  )
}
