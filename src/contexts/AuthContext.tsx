import { createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import { recoverUserInfo, signInRequest } from '../services/auth'

interface User {
  name: string
  email: string
}

interface AuthContextType {
  isAuthenticated: boolean
  user: User
  signIn: ({ email, password }: SignInData) => Promise<void>
}

interface SignInData {
  email: string
  password: string
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }): JSX.Element {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()
    if (token) {
      recoverUserInfo().then(response => {
        setUser(response.user)
      })
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    // fetch()
    const { token, user } = await signInRequest({ email, password })

    setCookie(undefined, 'nextauth-token', token, {
      maxAge: 60 * 60 * 1 // 1 hora
    })
    setUser(user)

    Router.push('/')
  }

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export default SignInData
