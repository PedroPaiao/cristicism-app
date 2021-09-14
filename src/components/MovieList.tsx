import React, { useState, useEffect, FunctionComponent } from 'react'
import { getFilms } from '../services/handleMovies'
import { MovieCard } from '../components/MovieCard'
import { Row } from '../styles/components/utils.style'

interface Movie {
  title: string
  description: string
  imageLink: string
}

interface MovieListProps {
  movies?: Movie[]
}

export const MovieList: FunctionComponent<MovieListProps> = props => {
  let movies = getFilms()
  if (movies == null && props.movies != null) {
    movies = props.movies
  }
  const [data, setData] = useState<Movie[]>()

  console.log(data)

  useEffect(() => {
    setData(movies)
  }, [])

  return (
    <Row justifyContent={'center'} backgroundColor={'#353535'}>
      {movies.map((movie, key) => {
        return <MovieCard key={key} imageLink={movie.imageLink}></MovieCard>
      })}
    </Row>
  )
}
