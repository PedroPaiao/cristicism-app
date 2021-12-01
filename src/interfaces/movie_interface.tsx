export interface MovieProps {
  id: number
  name: string
  description: string
  image_link: string
  category?: string
  trailler_link: string
  director: string
  year: number
  slugSearch?: string
}

export interface MovieListProps {
  movies?: MovieProps[]
  slug?: string
  slugSearch?: string
}

export interface MoviesJson {
  movies: MovieProps[]
  slug: string
  slugSearch: string
}

export interface GetMovieProps {
  id?: number
  slug?: string
}

export interface MovieJson {
  movies: MovieProps[]
  slug: string
  slugSearch: string
}

export interface MovieCardProps {
  image_link: string
  key?: number
  id?: number
  slugSearch?: string
  heightProp?: string
  widthProp?: string
  fontSize?: string
  title?: string
  description?: string
  className?: string
  showInfo?: boolean
  permitClick?: boolean
}
