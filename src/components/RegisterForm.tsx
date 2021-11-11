import React from 'react'
import { useForm } from 'react-hook-form'
import { FormWrapper } from '../styles/components/form.style'

interface InputValues {
  name: string
  email: string
  password: string
}

export default function RegisterForm(): JSX.Element {
  const { register, handleSubmit } = useForm<InputValues>()

  async function handleRegister(data: FormData) {
    console.log(data)
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset>
          <h2>Crie sua conta</h2>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <br />
            <input {...register('name')} type="name" name="name" id="name" />
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
