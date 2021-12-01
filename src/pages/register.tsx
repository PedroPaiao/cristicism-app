import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React from 'react'
import RegisterForm from '../components/RegisterForm'
import getLocalStorage from '../services/localstorage'

const Register: React.FC = () => {
  return (
    <main>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-6">
            <RegisterForm />
          </div>
        </div>
      </div>
    </main>
  )
}
export default Register

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
