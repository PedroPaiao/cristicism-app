import filmsJson from '../mocks/movies_1.json'

interface MovieProps {
  title: string
  description: string
  imageLink: string
}

export const getFilms = (): Array<MovieProps> => {
  return filmsJson
}
