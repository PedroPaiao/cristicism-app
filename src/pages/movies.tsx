import React from 'react'
import { Button } from '../styles/components/utils/button.style'
import { Textarea } from '../styles/components/utils/textarea.style'
import { useModal } from '../services/useModal'
import { Modal } from '../components/CreateMovieModal'
import { NewCriticismButton } from '../components/NewCriticismButton'
import { Row } from '../styles/components/utils.style'
import { StarsRating } from '../components/stars/StarsRating'

import { StarsWrapping } from '../styles/components/traillerCard.style'

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
  return (
    <main>
      <NewCriticismButton onClick={toggle}>
        Adicionar nova crítica
      </NewCriticismButton>
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        headerText={'Adicione uma nova critica'}
      />
    </main>
  )
}
export default Filmes
