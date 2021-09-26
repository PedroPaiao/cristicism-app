import { moviesActionJson } from '../mocks/movies_action'
import { moviesCommedyJson } from '../mocks/movies_commedy'
import { moviesFicctionJson } from '../mocks/movies_ficction'
import { moviesMainJson } from '../mocks/movies_main'
import { moviesTerrorJson } from '../mocks/movies_terror'
import { moviesTrendingJson } from '../mocks/movies_trending'
import { MoviesJson, GetMovieProps, MovieProps } from '../interfaces/movie_interface';

export const getMovies = (props: GetMovieProps): MoviesJson => {
  let moviesJson
  switch (props.slug) {
    case 'trending':
      moviesJson = moviesTrendingJson
      return moviesJson
    case 'action':
      moviesJson = moviesActionJson
      return moviesJson
    case 'fiction':
      moviesJson = moviesFicctionJson
      return moviesJson
    case 'terror':
      moviesJson = moviesTerrorJson
      return moviesJson
    case 'commedy':
      moviesJson = moviesCommedyJson
      return moviesJson
    case 'main':
      moviesJson = moviesMainJson
      return moviesJson
    default:
      moviesJson = moviesTrendingJson
      return moviesJson
  }
}

export const getAllMovies = (): MovieProps[] => {
  return [
    ...moviesTrendingJson.movies,
    ...moviesTerrorJson.movies,
    ...moviesFicctionJson.movies,
    ...moviesCommedyJson.movies,
    ...moviesActionJson.movies,
    ...moviesMainJson.movies,
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
