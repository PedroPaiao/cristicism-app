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

interface CreateCriticismProp {
  description: string
  rate: number
  movieId: number
}

interface CriticismResponse {
  data: CreateCriticismProp
}

export const createCriticism = async (
  props: CreateCriticismProp
): Promise<CriticismResponse> => {
  const api = getAPIClient()
  return api.post(
    `http://localhost:5000/movies/${props.movieId}/criticizes`,
    props
  )
}

export const getMovie = async (props: GetMovieProps): Promise<MovieProps> => {
  let movie
  await axios.get(`http://localhost:5000/movies/${props.id}`).then(response => {
    movie = response.data
  })

  return movie
}
