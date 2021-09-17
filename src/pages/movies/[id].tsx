import React from 'react'
import { useRouter } from 'next/router'
import { useModal } from '../../services/useModal'
import { Modal } from '../../components/CreateMovieModal'
import { NewCriticismButton } from '../../components/NewCriticismButton'
import { BiUserCircle } from 'react-icons/bi'

import { Textarea } from '../../styles/components/utils/textarea.style'
import { Button } from '../../styles/components/utils/button.style'
import {
  PageSubtitle,
  PageTitle,
  UserName,
  Text
} from '../../styles/components/utils/pagetitles.style'
import { Wrapper } from '../../styles/components/utils/wrapper.style'
import { Container } from '../../styles/components/utils/container.style'
import { Description } from '../../styles/components/utils/description.style'

import { StarsRating } from '../../components/stars/StarsRating'

import { TraillerCard } from '../../components/TraillerCard'
import { StarsWrapping } from '../../styles/components/traillerCard.style'
import { getMovie } from '../../services/handleMovies'
import { MovieCard } from '../../components/MovieCard'
import { Row } from '../../styles/components/utils/row.style'

const Filmes: React.FC = () => {
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
  const { isShown, toggle } = useModal()
  const content = (
    <React.Fragment>
      <Textarea placeholder={'O que achou do filme?'} />
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
        <Button>Enviar</Button>
      </Row>
    </React.Fragment>
  )
  const { id, slugSearch } = useRouter().query
  const movie = getMovie({ id: Number(id), slug: slugSearch.toString() })
  console.log(movie)
  return (
    <main>
      <Container>
        <PageTitle>{movie.title}</PageTitle>
        <Row justifyContent={'space-between'} alignItems={'flex-start'}>
          <Wrapper marginTop={'50px'} width={'300px'} height={'380px'}>
            <MovieCard
              id={Number(id)}
              imageLink={movie.imageLink}
              key={0}
              widthProp={'100%'}
              heightProp={'100%'}
            ></MovieCard>
            <Description>
              [ano][diretor]
              <br />
              [categoria]
            </Description>
          </Wrapper>
          <Wrapper>
            <TraillerCard
              youtubeTitle="Joker"
              srcYoutube="https://www.youtube.com/embed/zAGVQLHvwOY"
            ></TraillerCard>
            <Description>{movie.description}</Description>
            <NewCriticismButton onClick={toggle}>
              Adicionar nova crítica
            </NewCriticismButton>
          </Wrapper>
          <Modal
            isShown={isShown}
            hide={toggle}
            modalContent={content}
            headerText={'Adicione uma nova critica'}
          />
        </Row>
        <Row justifyContent={'flex-start'}>
          <PageSubtitle>Criticas da comunidade</PageSubtitle>
        </Row>
        <Row justifyContent={'flex-start'}>
          <BiUserCircle
            style={{ width: '50px', height: '50px', paddingRight: '10px' }}
          />
          <UserName>[nome do usuario]</UserName>
        </Row>
        <div style={{ width: '100%', height: '50px', border: 'solid 2px red' }}>
          <Text>[critica content]</Text>
        </div>
      </Container>
    </main>
  )
}
export default Filmes
