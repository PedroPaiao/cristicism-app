import { jsonFile } from '../mocks/movies_1'

interface MovieProps {
  title: string
  description: string
  imageLink: string
}

interface MovieJson {
  movies: MovieProps[]
  slug: string
}

export const getFilms = (): MovieJson => {
  const moviesJson = jsonFile

  return moviesJson
}
