import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import MainFooter from '../components/MainFooter'
import MainHeader from '../components/MainHeader'
import GlobalStyle from '../styles/globals'
import theme from '../styles/theme'
import { FloatActionButton } from '../components/FloatActionButton'
import { Modal } from '../components/CreateMovieModal'
import { useModal } from '../services/useModal'
import { MovieCard } from '../components/MovieCard'
import { NewCriticismButton } from '../components/NewCriticismButton'

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
      <NewCriticismButton>Adicionar nova crítica</NewCriticismButton>
      <FloatActionButton onClick={toggle}>+</FloatActionButton>
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        headerText={'Registre um novo filme'}
      />
      <MovieCard
        imageLink={'https://via.placeholder.com/600/92c952'}
      ></MovieCard>
      <MainFooter>asdasdasd</MainFooter>
    </ThemeProvider>
  )
}

export default MyApp
