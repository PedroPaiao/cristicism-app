import { moviesActionJson } from '../mocks/movies_action'
import { moviesCommedyJson } from '../mocks/movies_commedy'
import { moviesFicctionJson } from '../mocks/movies_ficction'
import { moviesTerrorJson } from '../mocks/movies_terror'
import { moviesTrendingJson } from '../mocks/movies_trending'
interface MovieProps {
  title: string
  description: string
  imageLink: string
}

interface MovieJson {
  movies: MovieProps[]
  slug: string
}

interface GetFilmsProps {
  slug: string
}

export const getFilms = (props: GetFilmsProps): MovieJson => {
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
    default:
      moviesJson = moviesTrendingJson
      return moviesJson
  }

  return moviesJson
}
