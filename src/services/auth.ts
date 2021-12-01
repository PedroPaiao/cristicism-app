import Router from 'next/router'
import { setCookie } from 'nookies'
import { User } from '../contexts/AuthContext'
import { api } from './api'

interface UserLoggedInProps {
  user: User
}

export interface SignInData {
  email: string
  password: string
}

export async function signInRequest(
  data: SignInData
): Promise<UserLoggedInProps> {
  let user: User
  await api
    .post('/login', data)
    .then(response => {
      user = response.data.user
    })
    .catch(error => {
      console.log(error)
    })
  return { user }
}

export async function signIn({ email, password }: SignInData): Promise<User> {
  try {
    const { user } = await signInRequest({ email, password })
    setCookie(undefined, 'nextauth-token', user.acessToken, {
      maxAge: 60 * 60 * 24, // 24h
      sameSite: true
    })
    // eslint-disable-next-line dot-notation
    api.defaults.headers['Authorization'] = `Bearer ${user.acessToken}`
    localStorage.setItem('user', JSON.stringify(user))

    Router.push('/')
    window.location.reload(true)
    return user
  } catch (error) {
    console.log(error)
  }
}
