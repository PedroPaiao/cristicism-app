import React, { FunctionComponent } from 'react'
import { StarIcon } from './StarIcon'

export interface StarsRatingProps {
  index: number
  rating: number
  hoverRating: number
  onMouseEnter: any
  onMouseLeave: any
  onSaveRating: any
}

export const StarsRating: FunctionComponent<StarsRatingProps> = ({
  index,
  rating,
  hoverRating,
  onMouseEnter,
  onMouseLeave,
  onSaveRating
}) => {
  const fill = React.useMemo(() => {
    if (hoverRating >= index) {
      return 'yellow'
    } else if (!hoverRating && rating >= index) {
      return 'yellow'
    }
    return 'none'
  }, [rating, hoverRating, index])
  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      <StarIcon props={{ fill: fill }} />
    </div>
  )
}
