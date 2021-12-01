import Router from 'next/router'
import React, { FunctionComponent } from 'react'
import cookie from 'js-cookie'
import { BoxLogout } from '../styles/components/boxlogout.style'

interface LogoutProps {
  isShown: boolean
}

const Logout: FunctionComponent<LogoutProps> = ({ isShown }) => {
  const logout = (
    <React.Fragment>
      <BoxLogout>
        <ul>
          <li onClick={MakeLogout}>Sair</li>
        </ul>
      </BoxLogout>
    </React.Fragment>
  )
  return isShown ? logout : null
}

export default Logout

const MakeLogout = () => {
  localStorage.removeItem('user')
  cookie.remove('nextauth-token')
  Router.push('/login')
  window.location.reload(true)
}
