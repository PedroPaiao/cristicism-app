import React, { FunctionComponent, useEffect, useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { UserName, Text } from '../styles/components/utils/pagetitles.style'
import { AutorBox, Criticism, Rate } from '../styles/criticismList.style'
import { StarIconWrapper } from '../styles/components/star.style'
import { StarIcon } from './stars/StarIcon'
import { TrashIcon } from './TrashIcon'
import { PencilIcon } from './PencilIcon'

interface UserProps {
  name: string
}

interface CriticismProps {
  id: number
  description: string
  rate: string
  User: UserProps
}

interface BoxCriticismProps {
  movieId: number
  list: CriticismProps[]
}

export const BoxCriticism: FunctionComponent<BoxCriticismProps> = (
  props: BoxCriticismProps
) => {
  const criticismList = props.list
  return (
    <>
      {criticismList.length > 0 ? (
        criticismList.map((criticism, index) => {
          return (
            <div key={index}>
              <AutorBox className="col-12">
                <div>
                  <BiUserCircle style={{ width: '65px', height: '50px' }} />
                  <UserName>{criticism.User.name}</UserName>
                </div>
                <div>
                  <PencilIcon criticim={criticism}></PencilIcon>
                  <TrashIcon id={criticism.id}></TrashIcon>
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
