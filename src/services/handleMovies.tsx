import { moviesActionJson } from '../mocks/movies_action'
import { moviesCommedyJson } from '../mocks/movies_commedy'
import { moviesFicctionJson } from '../mocks/movies_ficction'
import { moviesMainJson } from '../mocks/movies_main'
import { moviesTerrorJson } from '../mocks/movies_terror'
import { moviesTrendingJson } from '../mocks/movies_trending'
import {
  MovieListProps,
  GetMovieProps,
  MovieProps
} from '../interfaces/movie_interface'

import axios from 'axios'

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

export const getAllMovies = (): MovieProps[] => {
  return [
    ...moviesTrendingJson.movies,
    ...moviesTerrorJson.movies,
    ...moviesFicctionJson.movies,
    ...moviesCommedyJson.movies,
    ...moviesActionJson.movies,
    ...moviesMainJson.movies
  ]
}

export const getMovie = (props: GetMovieProps): MovieProps => {
  let moviesJson
  switch (props.slug) {
    case 'trending':
      moviesJson = moviesTrendingJson
      break
    case 'action':
      moviesJson = moviesActionJson
      break
    case 'fiction':
      moviesJson = moviesFicctionJson
      break
    case 'terror':
      moviesJson = moviesTerrorJson
      break
    case 'commedy':
      moviesJson = moviesCommedyJson
      break
    case 'main':
      moviesJson = moviesMainJson
      return moviesJson
    default:
      moviesJson = moviesTrendingJson
      break
  }

  console.log(moviesJson)

  return moviesJson.movies.filter(x => x.id === props.id)[0]
}
