import React, { FunctionComponent } from 'react'
import { getFilms } from '../services/handleMovies'
import { MovieCard } from '../components/MovieCard'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { MovieListWrapper } from '../styles/components/moviecard.style'

interface Movie {
  title: string
  description: string
  imageLink: string
}

interface MovieListProps {
  movies?: Movie[]
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

export const MovieList: FunctionComponent<MovieListProps> = props => {
  let movies = getFilms()
  if (movies == null && props.movies != null) {
    movies = props.movies
  }

  return (
    <MovieListWrapper>
      <Carousel responsive={responsive} infinite={true}>
        {movies.map((movie, key) => {
          return <MovieCard key={key} imageLink={movie.imageLink}></MovieCard>
        })}
      </Carousel>
    </MovieListWrapper>
  )
}
