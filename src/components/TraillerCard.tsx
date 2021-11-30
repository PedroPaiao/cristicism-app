import React, { FunctionComponent } from 'react'
import { StarsRating } from './stars/StarsRating'
import {
  CardWrapper,
  CardHeading,
  StarsWrapping
} from '../styles/components/traillerCard.style'
import { Row } from '../styles/components/utils/row.style'
export interface TraillerCardProps {
  srcYoutube: string
  youtubeTitle: string
}

export const TraillerCard: FunctionComponent<TraillerCardProps> = ({
  srcYoutube
}) => {
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
  return (
    <>
      <CardWrapper>
        <div
          dangerouslySetInnerHTML={{
            __html: `<iframe              
              src=${srcYoutube}
              title="YouTube video player"
              frameBorder="0"
            ></iframe>`
          }}
        />
        <Row>
          <CardHeading>Sua avaliação:</CardHeading>
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
        </Row>
      </CardWrapper>
    </>
  )
}
