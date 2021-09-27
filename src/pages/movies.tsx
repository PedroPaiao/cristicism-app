import React from 'react'
import { MovieCard } from '../components/MovieCard'
import { getAllMovies } from '../services/handleMovies'
import { Wrapper } from '../styles/components/utils/wrapper.style'

const Filmes: React.FC = () => {
  const movies = getAllMovies()
  return (
    <div className="container-fluid">
      <div className="row mb-5" />
      <div className="row mb-5">
        {movies.map((movie, key) => {
          return (
            <>
              <div className="col col-sm-2">
                <Wrapper width="98%" height="98%" key={key}>
                  <MovieCard
                    key={key}
                    id={movie.id}
                    imageLink={movie.imageLink}
                    showInfo={false}
                    heightProp={'100%'}
                    widthProp={'100%'}
                  ></MovieCard>
                </Wrapper>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}
export default Filmes
