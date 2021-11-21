import React from 'react'
import RegisterForm from '../components/RegisterForm'

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
