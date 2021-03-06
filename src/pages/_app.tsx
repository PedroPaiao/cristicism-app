import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import MainFooter from '../components/MainFooter'
import MainHeader from '../components/MainHeader'
import GlobalStyle from '../styles/globals'
import theme from '../styles/theme'
import { Modal } from '../components/CreateMovieModal'
import { useModal } from '../services/useModal'
import { AuthProvider } from '../contexts/AuthContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { isShown, toggle } = useModal()
  const content = (
    <React.Fragment>
      Aqui sera implementado um modal para o registro de filmes
    </React.Fragment>
  )

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <MainHeader></MainHeader>
        <Component {...pageProps} />
        <GlobalStyle />
        <Modal
          isShown={isShown}
          hide={toggle}
          modalContent={content}
          headerText={'Registre um novo filme'}
        />
        <MainFooter></MainFooter>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
