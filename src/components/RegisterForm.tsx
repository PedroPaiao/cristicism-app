import Router from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../services/api'
import { FormWrapper } from '../styles/components/form.style'

interface RegisterData {
  name: string
  email: string
  password: string
  passwordconfirm: string
}

export default function RegisterForm(): JSX.Element {
  const { register, handleSubmit } = useForm<RegisterData>()

  async function handleRegister(data: RegisterData) {
    await api.post('/users', data).then(() => {
      Router.push('/login')
    })
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset>
          <h2>Crie sua conta</h2>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <br />
            <input
              {...register('name')}
              type="text"
              name="name"
              id="name"
              required={true}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <br />
            <input
              {...register('email')}
              type="email"
              name="email"
              id="email"
              required={true}
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
              required={true}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordconfirm">Confirme a senha:</label>
            <br />
            <input
              {...register('passwordconfirm')}
              type="password"
              name="passwordconfirm"
              id="passwordconfirm"
              required={true}
            />
          </div>
          <input type="submit" value="Cadastrar" />
          <p>
            Ja possui uma conta?
            <a href="/login"> Entre!</a>
          </p>
        </fieldset>
      </form>
    </FormWrapper>
  )
}
