export interface MovieProps {
  id: number
  title: string
  description: string
  imageLink: string
  category?: string
}

export interface MovieListProps {
  movies?: MovieProps[]
  slug?: string
  slugSearch: string
}

export interface MoviesJson {
  movies: MovieProps[]
  slug: string
  slugSearch: string
}

export interface GetMovieProps {
  id?: number
  slug: string
}

export interface MovieJson {
  movies: MovieProps[]
  slug: string
  slugSearch: string
}

export interface MovieCardProps {
  imageLink: string
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