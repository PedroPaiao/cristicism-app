import { getAPIClient } from './axios'
import getLocalStorage from './localstorage'

interface CriticismProps {
  id: number
  description: string
  rate: string
}

interface CriticismResponse {
  data: CriticismProps[]
}

export const getCriticisms = async (
  movieId: number
): Promise<CriticismResponse> => {
  const api = getAPIClient()
  return api.get(`http://localhost:5000/movies/${movieId}/criticizes`)
}

export const getMyCriticisms = async (): Promise<CriticismResponse> => {
  const api = getAPIClient()
  const user = await getLocalStorage()
  return api.get(`http://localhost:5000/users/${user.id}/criticizes`)
}

export const destroyCriticism = async (
  criticismId: number
): Promise<CriticismResponse> => {
  const api = getAPIClient()
  return api.delete(`http://localhost:5000/criticizes/${criticismId}`)
}

export const createCriticism = async (
  props: CriticismProps
): Promise<CriticismResponse> => {
  const api = getAPIClient()
  return api.post(`http://localhost:5000/movies/${props.id}/criticizes`, props)
}

export const updateCriticism = async (
  props: CriticismProps
): Promise<CriticismResponse> => {
  const api = getAPIClient()
  return api.put(`http://localhost:5000/criticizes/${props.id}`, props)
}
