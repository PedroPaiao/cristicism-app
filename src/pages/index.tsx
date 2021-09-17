import React from 'react'
import { MovieList } from '../components/MovieList'
import { Wrapper } from '../styles/components/utils/wrapper.style'

const Home: React.FC = () => {
  return (
    <main>
      <div className="container-fluid">
        <Wrapper marginTop={'400px'} className="row">
          <MovieList />
        </Wrapper>
      </div>
    </main>
  )
}
export default Home
