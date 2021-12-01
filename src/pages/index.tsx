import React, { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import Carousel from 'react-multi-carousel'
import { MovieCard } from '../components/MovieCard'
import { MovieList } from '../components/MovieList'

import { Wrapper } from '../styles/components/utils/wrapper.style'
import { getMovies } from '../services/handleMovies'
import { MovieListProps } from '../interfaces/movie_interface'

const Home: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  const [moviesList, setMovies] = useState<MovieListProps>()

  useEffect(() => {
    getMovies({}).then(response => {
      setMovies(response)
    })
  }, [])

  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8">
            <Wrapper height="400px" width="100%">
              <Carousel responsive={responsive} infinite={true} autoPlay={true}>
                {moviesList?.movies.length > 0 ? (
                  moviesList.movies.map((movie, key) => {
                    return (
                      <MovieCard
                        key={key}
                        heightProp={'400px'}
                        title={movie.name}
                        description={movie.description}
                        fontSize={'2em'}
                        className="col-12 col-sm-12"
                        image_link={movie.image_link}
                        slugSearch={movie.slugSearch}
                        id={movie.id}
                      />
                    )
                  })
                ) : (
                  <h2></h2>
                )}
              </Carousel>
            </Wrapper>
          </div>
          <div className="col-12 col-sm-12 col-md-4">
            {moviesList?.movies.length > 1 ? (
              <>
                <Wrapper className="col col-sm-12" height="190px" width="100%">
                  <MovieCard
                    fontSize={'1.5em'}
                    title={moviesList.movies[0].name}
                    image_link={moviesList.movies[0].image_link}
                    slugSearch={moviesList.movies[0].slugSearch}
                    description={moviesList.movies[0].description}
                    id={moviesList.movies[0].id}
                  ></MovieCard>
                </Wrapper>
                <Wrapper
                  className="col-12 col-sm-12"
                  height="190px"
                  width="100%"
                  marginTop="20px"
                >
                  <MovieCard
                    fontSize={'1.5em'}
                    title={moviesList.movies[1].name}
                    image_link={moviesList.movies[1].image_link}
                    slugSearch={moviesList.movies[1].slugSearch}
                    description={moviesList.movies[1].description}
                    id={moviesList.movies[1].id}
                  ></MovieCard>
                </Wrapper>
              </>
            ) : (
              <h2></h2>
            )}
          </div>
        </div>
        <Wrapper marginTop={'20px'}>
          <MovieList slug={'trending'} slugSearch={'trending'} />
        </Wrapper>
        <Wrapper marginTop={'20px'}>
          <MovieList slug={'fiction'} slugSearch={'trending'} />
        </Wrapper>
        <Wrapper marginTop={'20px'}>
          <MovieList slug={'action'} slugSearch={'trending'} />
        </Wrapper>
        <Wrapper marginTop={'20px'}>
          <MovieList slug={'commedy'} slugSearch={'trending'} />
        </Wrapper>
        <Wrapper marginTop={'20px'}>
          <MovieList slug={'terror'} slugSearch={'trending'} />
        </Wrapper>
      </div>
    </main>
  )
}
export default Home

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { 'nextauth-token': cookie } = parseCookies(ctx)

  if (cookie === undefined) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
