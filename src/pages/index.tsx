import React from 'react'
import { TraillerCard } from '../components/TraillerCard'
import { Input } from '../styles/components/utils/input.style'
import { MovieList } from '../components/MovieList'

const Home: React.FC = () => {
  return (
    <main>
      <TraillerCard
        srcYoutube="https://www.youtube.com/embed/eOrNdBpGMv8?autoplay=1&controls=0&amp;start=10"
        youtubeTitle="Marvel's The Avengers- Trailer"
      ></TraillerCard>

      <Input type={'text'} placeholder={'Placeholder'}></Input>
      <MovieList />
    </main>
  )
}
export default Home
