import React, { FunctionComponent, useEffect, useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { UserName, Text } from '../styles/components/utils/pagetitles.style'
import { AutorBox, Criticism, Rate } from '../styles/criticismList.style'
import { StarIconWrapper } from '../styles/components/star.style'
import { StarIcon } from './stars/StarIcon'
import { getCriticisms } from '../services/handleCriticism'

interface BoxCriticismProps {
  movieId: number
}

export const BoxCriticism: FunctionComponent<BoxCriticismProps> = (
  props: BoxCriticismProps
) => {
  const [criticismList, setCriticismList] = useState([])
  useEffect(() => {
    getCriticisms(props.movieId).then(response => {
      setCriticismList(response.data)
    })
  }, [])
  return (
    <>
      {criticismList != null ? (
        criticismList.map((criticism, index) => {
          return (
            <div key={index}>
              <AutorBox className="col-12">
                <div>
                  <BiUserCircle style={{ width: '65px', height: '50px' }} />
                  <UserName>{criticism.User.name}</UserName>
                </div>
                <div>
                  <StarIconWrapper>
                    <StarIcon props={{ fill: 'yellow' }}></StarIcon>
                  </StarIconWrapper>
                  <Rate>{criticism.rate}</Rate>
                </div>
              </AutorBox>
              <Criticism className="row-col-12">
                <div>
                  <Text>{criticism.description}</Text>
                </div>
              </Criticism>
            </div>
          )
        })
      ) : (
        <Criticism className="row-col-12 mb-5">
          <div>
            <Text>Filme ainda não possui criticas</Text>
          </div>
        </Criticism>
      )}
    </>
  )
}
