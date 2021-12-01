import React, { useEffect, useState } from 'react'
import { BoxCriticism } from '../components/BoxCriticism'
import { getMyCriticisms } from '../services/handleCriticism'

const My: React.FC = () => {
  const [criticismList, setCriticismList] = useState([])

  useEffect(() => {
    getMyCriticisms().then(response => {
      setCriticismList(response.data)
    })
  }, [])
  return (
    <div className="container-fluid h-100">
      <div className="row mb-5" />
      <div className="row mb-2" />
      <h1 className="text-white text-center">Minhas criticas</h1>
      <div className="row mb-5">
        {criticismList?.length > 0 ? (
          criticismList.map((movie, key) => {
            return (
              <>
                <div key={key} className="row align-items-center">
                  <BoxCriticism
                    movieId={movie.id}
                    list={criticismList}
                  ></BoxCriticism>
                </div>
              </>
            )
          })
        ) : (
          <h2></h2>
        )}
      </div>
    </div>
  )
}
export default My
