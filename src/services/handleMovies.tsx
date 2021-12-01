import {
  MovieListProps,
  GetMovieProps,
  MovieProps
} from '../interfaces/movie_interface'

import axios from 'axios'
import { getAPIClient } from './axios'

export const getMovies = async (
  props: GetMovieProps
): Promise<MovieListProps> => {
  const moviesList: MovieListProps = {}
  await axios
    .get(`http://localhost:5000/movies?slug=${props.slug}`)
    .then(response => {
      moviesList.movies = response.data
      moviesList.slug = props.slug
      moviesList.slugSearch = props.slug
    })

  return moviesList
}

export const getMovie = async (props: GetMovieProps): Promise<MovieProps> => {
  let movie
  await axios.get(`http://localhost:5000/movies/${props.id}`).then(response => {
    movie = response.data
  })

  return movie
}
