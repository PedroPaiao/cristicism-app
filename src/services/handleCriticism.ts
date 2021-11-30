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
