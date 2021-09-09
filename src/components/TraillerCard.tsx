import React, { FunctionComponent } from 'react'
import {
  CardWrapper,
  CardHeading
} from '../styles/components/traillerCard.style'

export interface TraillerCardProps {
  srcYoutube: string
  youtubeTitle: string
}

export const TraillerCard: FunctionComponent<TraillerCardProps> = ({
  srcYoutube,
  youtubeTitle
}) => {
  return (
    <CardWrapper>
      <div
        dangerouslySetInnerHTML={{
          __html: `<iframe
        width="560"
        height="315"
        src=${srcYoutube}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>`
        }}
      />
      <CardHeading>{youtubeTitle}</CardHeading>
    </CardWrapper>
  )
}
