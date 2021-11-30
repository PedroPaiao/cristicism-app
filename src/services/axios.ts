import axios, { AxiosInstance } from 'axios'
import { parseCookies } from 'nookies'
import { Context } from 'vm'

export function getAPIClient(ctx?: Context): AxiosInstance {
  const { 'nextauth-token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: `http://localhost:5000`
  })

  api.interceptors.request.use(config => {
    return config
  })

  if (token) {
    const newLocal = 'Authorization'
    api.defaults.headers[newLocal] = `Bearer ${token}`
  }
  return api
}
