import { getAPIClient } from './axios'

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

export const destroyCriticism = async (
  criticismId: number
): Promise<CriticismResponse> => {
  const api = getAPIClient()
  return api.delete(`http://localhost:5000/criticizes/${criticismId}`)
}
