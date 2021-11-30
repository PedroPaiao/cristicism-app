import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useModal } from '../../services/useModal'
import { Modal } from '../../components/CreateMovieModal'
import { NewCriticismButton } from '../../components/NewCriticismButton'

import { Textarea } from '../../styles/components/utils/textarea.style'
import { Button } from '../../styles/components/utils/button.style'
import {
  PageSubtitle,
  PageTitle
} from '../../styles/components/utils/pagetitles.style'
import { Wrapper } from '../../styles/components/utils/wrapper.style'
import { Description } from '../../styles/components/utils/description.style'

import { StarsRating } from '../../components/stars/StarsRating'

import { TraillerCard } from '../../components/TraillerCard'
import { StarsWrapping } from '../../styles/components/traillerCard.style'
import { createCriticism, getMovie } from '../../services/handleMovies'
import { MovieCard } from '../../components/MovieCard'
import { Row } from '../../styles/components/utils/row.style'
import { BoxCriticism } from '../../components/BoxCriticism'
import { MovieProps } from '../../interfaces/movie_interface'
import { userInfo } from 'os'

const Filmes: React.FC = () => {
  const [idFixed, setId] = useState<number>()
  const { id } = useRouter().query
  const [movie, setMovie] = useState<MovieProps>()

  useEffect(() => {
    setId(Number(id))

    if (!id) return
    getMovie({ id: Number(id) || idFixed }).then(response => {
      setMovie(response)
    })
  }, [id])

  const [rating, setRating] = React.useState(0)
  const [hoverRating, setHoverRating] = React.useState(0)
  const onMouseEnter = index => {
    setHoverRating(index)
  }
  const onMouseLeave = () => {
    setHoverRating(0)
  }
  const onSaveRating = index => {
    setRating(index)
    // TODO: API call to save on backend
  }
  const textValue = ''
  const doRequest = () => {
    return createCriticism({
      movieId: movie.id,
      userId: 1,
      description: textValue,
      rate: 0
    })
  }

  const { isShown, toggle } = useModal()
  const content = (
    <React.Fragment>
      <Textarea value={textValue} placeholder={'O que achou do filme?'} />
      <Row justifyContent={'space-between'}>
        <Button backgroundColor={'#ADADAD'}>Cancelar</Button>
        <StarsWrapping>
          {[1, 2, 3, 4, 5].map(index => {
            return (
              <StarsRating
                key={index}
                index={index}
                rating={rating}
                hoverRating={hoverRating}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onSaveRating={onSaveRating}
              />
            )
          })}
        </StarsWrapping>
        <Button onClick={doRequest}>Enviar</Button>
      </Row>
    </React.Fragment>
  )

  return (
    <main>
      {movie != null ? (
        <div className="container">
          <PageTitle>{movie.title}</PageTitle>
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-4">
              <Wrapper
                className="cardMovieMobile"
                marginTop={'50px'}
                width={'85%'}
                height={'auto'}
              >
                <MovieCard
                  permitClick={false}
                  showInfo={false}
                  image_link={movie.image_link}
                  key={0}
                  widthProp={'100%'}
                  heightProp={'100%'}
                ></MovieCard>
                <Description>
                  Diretor: {movie.director}
                  <br />
                  Ano: {movie.year}
                  <br />
                  {movie.category}
                </Description>
              </Wrapper>
            </div>
            <div className="col-12 col-sm-12 col-lg-8">
              <div>
                <TraillerCard
                  youtubeTitle="Joker"
                  srcYoutube={movie.trailler_link}
                ></TraillerCard>
                <Description>{movie.description}</Description>
                <NewCriticismButton onClick={toggle}>
                  Adicionar nova crítica
                </NewCriticismButton>
              </div>
            </div>
            <Modal
              isShown={isShown}
              hide={toggle}
              modalContent={content}
              headerText={'Adicione uma nova critica'}
            />
          </div>
          <div className="row">
            <PageSubtitle>Criticas da comunidade</PageSubtitle>
          </div>
          <div className="row align-items-center">
            <BoxCriticism movieId={movie.id}></BoxCriticism>
          </div>
        </div>
      ) : null}
    </main>
  )
}
export default Filmes
