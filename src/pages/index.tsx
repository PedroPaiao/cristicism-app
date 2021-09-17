import React from 'react'
import { MovieList } from '../components/MovieList'
import { Container } from '../styles/components/utils/container.style'
import { Wrapper } from '../styles/components/utils/wrapper.style'

const Home: React.FC = () => {
  return (
    <main>
      <Container fluid={true}>
        <Wrapper marginTop={'400px'}>
          <MovieList />
        </Wrapper>
      </Container>
    </main>
  )
}
export default Home
