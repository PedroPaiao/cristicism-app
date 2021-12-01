import React, { useEffect, useState } from 'react'
import { MovieCard } from '../components/MovieCard'
import { MovieListProps } from '../interfaces/movie_interface'
import { getMovies } from '../services/handleMovies'
import { Wrapper } from '../styles/components/utils/wrapper.style'

const Filmes: React.FC = () => {
  const [moviesList, setMovies] = useState<MovieListProps>()

  useEffect(() => {
    getMovies({}).then(response => {
      setMovies(response)
    })
  }, [])
  return (
    <div className="container-fluid">
      <div className="row mb-5" />
      <div className="row mb-5">
        {moviesList?.movies.length > 0 ? (
          moviesList.movies.map((movie, key) => {
            return (
              <>
                <div className="col col-sm-2">
                  <Wrapper width="98%" height="98%" key={key}>
                    <MovieCard
                      key={key}
                      id={movie.id}
                      title={movie.name}
                      description={movie.description}
                      image_link={movie.image_link}
                      heightProp={'100%'}
                      widthProp={'100%'}
                    ></MovieCard>
                  </Wrapper>
                </div>
              </>
            )
          })
        ) : (
          <h2></h2>
        )}
      </div>
    </div>
  )
}
export default Filmes
