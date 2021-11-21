import axios from 'axios'
import { parseCookies } from 'nookies'

export function getAPIClient(ctx?: any) {
  const { 'nextauth-token': token } = parseCookies(ctx)
  console.log('token: ', token)

  const api = axios.create({
    baseURL: `http://localhost:5000`
  })

  api.interceptors.request.use(config => {
    console.log('config', config)
    return config
  })

  if (token) {
    // eslint-disable-next-line dot-notation
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }
  return api
}
