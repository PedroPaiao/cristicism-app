import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Modal } from '../components/CreateMovieModal'
import { FloatActionButton } from '../components/FloatActionButton'
import { MovieCard } from '../components/MovieCard'
import { useModal } from '../services/useModal'
import GlobalStyle from '../styles/globals'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { isShown, toggle } = useModal()

  const content = (
    <React.Fragment>
      Aqui sera implementado um modal para o registro de filmes
    </React.Fragment>
  )

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
      <FloatActionButton onClick={toggle}>+</FloatActionButton>
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        headerText={'Registre um novo filme'}
      />
      <MovieCard imageLink={'https://via.placeholder.com/600/92c952'}></MovieCard>
    </ThemeProvider>
  )
}

export default MyApp
