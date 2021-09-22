import React, { FunctionComponent } from 'react'
import { criticismListJson } from '../mocks/criticisms'
import { BiUserCircle } from 'react-icons/bi'
import { UserName, Text } from '../styles/components/utils/pagetitles.style'

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
): CriticismListJson[] => {
  let listReturned = null
  criticismListJson.forEach(element => {
    if (element.movieId === props.id) {
      listReturned = element.criticismList
    }
  })
  console.log('lista retornada:', listReturned)
  return listReturned
}

interface BoxCriticismProps {
  movieId: number
}

export const BoxCriticism: FunctionComponent<BoxCriticismProps> = (
  props: BoxCriticismProps
) => {
  const criticismList = getCriticismList({ id: props.movieId })
  console.log('criticismList: ', criticismList)
  return (
    <>
      {criticismList.forEach(criticism => {
        criticism.criticismList.forEach(critica => {
          console.log(critica)
          return critica
          /*
          return (
            <>
              <div className="col-2 col-md-1">
                <BiUserCircle style={{ width: '40px', height: '45px' }} />
              </div>

              <div className="col-10 col-md-11">
                <UserName>{critica.autorName}</UserName>
              </div>
              <div
                className="row-col-12"
                style={{
                  width: '100%',
                  height: '50px',
                  border: 'solid 2px red'
                }}
              >
                <Text>{critica.content}</Text>
              </div>
            </>
          ) */
        })
      })}
    </>
  )
}
