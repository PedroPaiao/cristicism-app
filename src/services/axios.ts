import axios, { AxiosInstance } from 'axios'
import { parseCookies } from 'nookies'
import { Context } from 'vm'
import getLocalStorage from './localstorage'

export function getAPIClient(ctx?: Context): AxiosInstance {
  const { 'nextauth-token': token } = parseCookies(ctx)
  const user = getLocalStorage()

  const api = axios.create({
    baseURL: `http://localhost:5000`
  })

  api.interceptors.request.use(config => {
    return config
  })

  if (token) {
    const authorization = 'Authorization'
    const userID = 'userId'
    api.defaults.headers[authorization] = `Bearer ${token}`
    api.defaults.headers[userID] = user.id
  }
  return api
}
