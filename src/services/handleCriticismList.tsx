import React, { FunctionComponent } from 'react'
import { criticismListJson } from '../mocks/criticisms'
import { BiUserCircle } from 'react-icons/bi'
import { UserName, Text } from '../styles/components/utils/pagetitles.style'
import { AutorBox, Criticism, Rate } from '../styles/criticismList.style'
import { StarIconWrapper } from '../styles/components/star.style'
import { StarIcon } from '../components/stars/StarIcon'

interface CriticismProps {
  criticismId: number
  autorName: string
  content: string
}

interface CriticismListJson {
  movieId: number
  criticismList: CriticismProps[]
}

interface GetCriticismList {
  id: number
}

export const getCriticismList = (
  props: GetCriticismList
): CriticismListJson => {
  return criticismListJson.filter(element => element.movieId === props.id)[0]
}

interface BoxCriticismProps {
  movieId: number
}

export const BoxCriticism: FunctionComponent<BoxCriticismProps> = (
  props: BoxCriticismProps
) => {
  const criticismList = getCriticismList({ id: props.movieId })
  return (
    <>
      {criticismList != null ? (
        criticismList.criticismList.map(criticism => {
          console.log(criticism.autorName)
          return (
            <>
              <AutorBox className="col-12">
                <div>
                  <BiUserCircle style={{ width: '65px', height: '50px' }} />
                  <UserName>{criticism.autorName}</UserName>
                </div>
                <div>
                  <StarIconWrapper>
                    <StarIcon props={{ fill: 'yellow' }}></StarIcon>
                  </StarIconWrapper>
                  <Rate>4.5</Rate>
                </div>
              </AutorBox>
              <Criticism className="row-col-12">
                <div>
                  <Text>{criticism.content}</Text>
                </div>
              </Criticism>
            </>
          )
        })
      ) : (
        <>
          <Criticism className="row-col-12 mb-5">
            <div>
              <Text>Filme ainda não possui criticas</Text>
            </div>
          </Criticism>
        </>
      )}
    </>
  )
}
