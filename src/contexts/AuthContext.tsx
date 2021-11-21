import React, { createContext } from 'react'
import { signIn, SignInData } from '../services/auth'

export interface User {
  id: number
  name: string
  email: string
  acessToken: string
}

interface AuthContextType {
  signIn: (data: SignInData) => Promise<User>
}

const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }): JSX.Element {
  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  )
}

export default AuthContext
