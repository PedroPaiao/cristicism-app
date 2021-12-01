import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React from 'react'
import LoginForm from '../components/LoginForm'
import getLocalStorage from '../services/localstorage'

const Login: React.FC = () => {
  return (
    <main>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  )
}
export default Login

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { 'nextauth-token': cookie } = parseCookies(ctx)
  const userLoggedIn = getLocalStorage()

  if (cookie || userLoggedIn) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
