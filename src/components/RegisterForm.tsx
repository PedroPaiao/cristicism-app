import React from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../services/api'
import { signIn } from '../services/auth'
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
    console.log(data)
    await api.post('/users', data).then(response => {
      signIn(response.data)
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
            <input {...register('name')} type="text" name="name" id="name" />
          </div>
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
          <div className="form-group">
            <label htmlFor="passwordconfirm">Confirme a senha:</label>
            <br />
            <input
              {...register('passwordconfirm')}
              type="password"
              name="passwordconfirm"
              id="passwordconfirm"
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
