import React, { FunctionComponent } from 'react'
import { criticismListJson } from '../mocks/criticisms'
import { BiUserCircle } from 'react-icons/bi'
import { UserName, Text } from '../styles/components/utils/pagetitles.style'
import { AutorBox, Criticism } from '../styles/criticismList.style'

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
  // console.log('criticismList: ', criticismList)
  return (
    <>
      {criticismList.criticismList.map(criticism => {
        console.log(criticism.autorName)
        return (
          <>
            <AutorBox className="col-12">
              <BiUserCircle style={{ width: '65px', height: '50px' }} />
              <UserName>{criticism.autorName}</UserName>
            </AutorBox>
            <Criticism className="row-col-12">
              <div>
                <Text>{criticism.content}</Text>
              </div>
            </Criticism>
          </>
        )
      })}
    </>
  )
}
