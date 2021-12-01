import { useRouter } from 'next/router'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { updateCriticism } from '../services/handleCriticism'
import { useModal } from '../services/useModal'
import { IconWrapper } from '../styles/components/star.style'
import { StarsWrapping } from '../styles/components/traillerCard.style'
import { Button } from '../styles/components/utils/button.style'
import { Row } from '../styles/components/utils/row.style'
import { Textarea } from '../styles/components/utils/textarea.style'
import { Modal } from './CreateMovieModal'
import { StarsRating } from './stars/StarsRating'

interface CriticismProps {
  id: number
  description: string
  rate: string
}

interface PencilIconProps {
  criticim: CriticismProps
}

export const PencilIcon: FunctionComponent<PencilIconProps> = (
  props: PencilIconProps
) => {
  const router = useRouter()
  const doRequest = () => {
    return updateCriticism({
      id: props.criticim.id,
      description: textValue,
      rate: rating.toString()
    })
      .then(() => {
        alert('Critica atualizada com sucesso!')
        router.reload()
      })
      .catch(() => alert('Algo inesperado ocorreu'))
  }
  const [textValue, setTextValue] = useState('')
  const handleChange = event => {
    setTextValue(event.target.value)
  }
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
  }

  useEffect(() => {
    setRating(Number(props.criticim.rate))
    setTextValue(props.criticim.description)
  }, [Number(props.criticim.rate)])

  const { isShown, toggle } = useModal()

  const content = (
    <React.Fragment>
      <Textarea value={textValue} onChange={handleChange} placeholder={''} />
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
    <>
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        headerText={'Atualize a sua critica'}
      />
      <IconWrapper onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="30px"
          height="30px"
        >
          <path
            d="M16.5,94.083c-1.734,0-3.365-0.675-4.593-1.9c-1.61-1.608-2.266-3.977-1.712-6.182l3.56-14.178 c0.294-1.171,0.905-2.232,1.77-3.074l56.008-56.143c1.732-1.735,4.035-2.69,6.485-2.69c2.455,0.001,4.757,0.958,6.487,2.694 l7.096,7.124c3.277,3.588,3.186,9.188-0.274,12.661L35.249,88.603c-0.462,0.463-0.985,0.849-1.557,1.152 c-0.429,0.232-0.93,0.428-1.448,0.56l-14.154,3.572C17.56,94.019,17.029,94.083,16.5,94.083z"
            opacity=".35"
          />
          <path
            fill="#f2f2f2"
            d="M14.5,92.083c-1.734,0-3.365-0.675-4.593-1.9c-1.61-1.608-2.266-3.977-1.712-6.182l3.56-14.178 c0.294-1.171,0.905-2.232,1.77-3.074l56.008-56.143c1.732-1.735,4.035-2.69,6.485-2.69c2.455,0.001,4.757,0.958,6.487,2.694 l7.096,7.124c3.277,3.588,3.186,9.188-0.274,12.661L33.249,86.603c-0.462,0.463-0.985,0.849-1.557,1.152 c-0.429,0.232-0.93,0.428-1.448,0.56l-14.154,3.572C15.56,92.019,15.029,92.083,14.5,92.083z"
          />
          <path
            fill="#f9b84f"
            d="M76.516,34.03L28.945,81.714L18.361,71.105l47.571-47.684L76.516,34.03z"
          />
          <path
            fill="#f4665c"
            d="M84.721,22.033l-6.822-6.836c-1.037-1.041-2.726-1.041-3.765,0l-4.961,4.972l10.583,10.608 l4.965-4.968C85.76,24.766,85.76,23.078,84.721,22.033"
          />
          <path
            fill="#9aa2e6"
            d="M65.625,23.721l3.538-3.554l10.59,10.608l-3.538,3.554L65.625,23.721z"
          />
          <path
            fill="#fedeb3"
            d="M15.074,85.583l14.146-3.57L18.634,71.406L15.074,85.583z"
          />
          <path
            fill="#40396e"
            d="M14.5,87.083c-0.393,0-0.775-0.154-1.06-0.438c-0.374-0.373-0.523-0.915-0.395-1.427l3.56-14.177 c0.071-0.282,0.221-0.532,0.426-0.726l56.042-56.177c0.786-0.788,1.832-1.222,2.945-1.222c0,0,0.001,0,0.002,0 c1.113,0,2.158,0.435,2.943,1.223l6.82,6.834c0.001,0,0.001,0.001,0.002,0.002c1.616,1.625,1.616,4.269,0,5.892L29.709,83.071 c-0.106,0.106-0.228,0.196-0.358,0.265c-0.105,0.057-0.219,0.102-0.338,0.132l-14.146,3.57 C14.746,87.068,14.622,87.083,14.5,87.083z M19.414,72.174l-2.848,11.341l11.311-2.854L83.659,24.75 c0.454-0.456,0.454-1.199,0-1.657l-6.82-6.835c-0.219-0.22-0.51-0.34-0.82-0.341h0c-0.311,0-0.602,0.121-0.821,0.341L19.414,72.174 z"
          />
          <path
            fill="#40396e"
            d="M16.303,78.414L14.5,85.583l7.15-1.807L16.303,78.414z"
          />
        </svg>
      </IconWrapper>
    </>
  )
}
