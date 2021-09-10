import React from 'react'
import { TraillerCard } from '../components/TraillerCard'

const Home: React.FC = () => {
  return (
    <main>
      <TraillerCard
        srcYoutube="https://www.youtube.com/embed/eOrNdBpGMv8?autoplay=1&controls=0&amp;start=10"
        youtubeTitle="Marvel's The Avengers- Trailer"
      ></TraillerCard>
    </main>
  )
}
export default Home
