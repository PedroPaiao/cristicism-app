import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import AuthContext from '../contexts/AuthContext'
import { SignInData } from '../services/auth'
import { FormWrapper } from '../styles/components/form.style'

interface InputValues {
  email: string
  password: string
}

export default function LoginForm(): JSX.Element {
  const { register, handleSubmit } = useForm<InputValues>()
  const { signIn } = useContext(AuthContext)

  async function handleLogin(data: SignInData) {
    await signIn(data)
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset>
          <h2>Comece a navegar</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <br />
            <input
              {...register('email')}
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <br />
            <input
              {...register('password')}
              type="password"
              name="password"
              id="password"
            />
          </div>
          <input type="submit" value="Entrar" />
          <p>
            Ainda nao possui uma conta?
            <a href="/register"> Cadastre-se agora!</a>
          </p>
        </fieldset>
      </form>
    </FormWrapper>
  )
}
