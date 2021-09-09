import React from 'react'
import { TraillerCard } from '../components/TraillerCard'

const Home: React.FC = () => {
  return (
    <main>
      <TraillerCard
        srcYoutube="https://www.youtube.com/embed/eOrNdBpGMv8"
        youtubeTitle="Marvel's The Avengers- Trailer"
      ></TraillerCard>
    </main>
  )
}
export default Home
