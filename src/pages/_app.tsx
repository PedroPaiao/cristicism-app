import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import MainHeader from '../components/MainHeader'
import GlobalStyle from '../styles/globals'
import theme from '../styles/theme'
import { FloatActionButton } from '../components/FloatActionButton'
import { Modal } from '../components/CreateMovieModal'
import { useModal } from '../services/useModal'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { isShown, toggle } = useModal()
  const content = (
    <React.Fragment>
      Aqui sera implementado um modal para o registro de filmes
    </React.Fragment>
  )

  return (
    <ThemeProvider theme={theme}>
      <MainHeader></MainHeader>
      <Component {...pageProps} />
      <GlobalStyle />
      <FloatActionButton onClick={toggle}>+</FloatActionButton>
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        headerText={'Registre um novo filme'}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </ThemeProvider>
  )
}

export default MyApp
