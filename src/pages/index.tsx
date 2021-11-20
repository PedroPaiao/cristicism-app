import React from 'react'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import Carousel from 'react-multi-carousel'
import { MovieCard } from '../components/MovieCard'
import { MovieList } from '../components/MovieList'

import { Wrapper } from '../styles/components/utils/wrapper.style'

const Home: React.FC = () => {
  const mainFilmLink =
    'https://i0.wp.com/cloud.estacaonerd.com/wp-content/uploads/2021/04/03161447/Viuva-Negra.jpg?fit=1280%2C720&ssl=1'
  const secondFilmLink =
    'data:image/jpeg;base64,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'
  const thirdFilmLink =
    'https://midias.agazeta.com.br/2021/06/22/filme-velozes-e-furiosos-9-542213-article.jpg'
  const description =
    'Ao nascer, a Viúva Negra, então conhecida como Natasha Romanova, é entregue à KGB, que a prepara para se tornar sua agente suprema. Porém, o seu próprio governo tenta matá-la quando a União Soviética se desfaz.'
  const descriptionDora =
    'É uma jovem aventureira que viaja para diversos destinos diferentes com a ajuda de um mapa. Ao longo do episódio ela ensina palavras e pequenas frases em inglês para quem está assistindo. Ela não é vingativa ou má com o vilão Raposa, que tenta roubar seus amigos a todo momento.'
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8">
            <Wrapper height="400px" width="100%">
              <Carousel responsive={responsive} infinite={true} autoPlay={true}>
                <MovieCard
                  heightProp={'400px'}
                  title={'Viúva Negra'}
                  description={description}
                  fontSize={'2em'}
                  className="col-12 col-sm-12"
                  image_link={mainFilmLink}
                  slugSearch={'main'}
                  id={74}
                />
                <MovieCard
                  heightProp={'400px'}
                  title={'Dora a aventureira mesmo'}
                  description={descriptionDora}
                  fontSize={'2em'}
                  className="col-12 col-sm-12"
                  image_link={
                    'https://img.ibxk.com.br//ms/images/highlights/000/049/235/46471.jpg?w=1200&h=675&mode=crop&scale=both'
                  }
                  slugSearch={'main'}
                  id={74}
                />
                <MovieCard
                  heightProp={'400px'}
                  title={'1917'}
                  description={
                    'Na Primeira Guerra Mundial, dois soldados britânicos recebem ordens aparentemente impossíveis de cumprir. Em uma corrida contra o tempo, eles precisam atravessar o território inimigo e entregar uma mensagem que pode salvar 1.600 de seus companheiros.'
                  }
                  fontSize={'2em'}
                  className="col-12 col-sm-12"
                  image_link={
                    'https://cdn.tlc-massive.com/shain/v1/dataservice/ResizeImage/$value?Format=%27png%27&Quality=85&ImageId=%27234319.png%27&ImageUrl=%27234319.png%27&EntityType=%27Item%27&EntityId=%2721151%27&Width=1920&Height=1080&device=web_browser&subscriptions=Anonymous'
                  }
                  slugSearch={'main'}
                  id={74}
                />
              </Carousel>
            </Wrapper>
          </div>
          <div className="col-12 col-sm-12 col-md-4">
            <Wrapper className="col col-sm-12" height="190px" width="100%">
              <MovieCard
                fontSize={'1.5em'}
                title={'Doutor Estranho'}
                image_link={secondFilmLink}
                slugSearch={'main'}
                id={75}
              ></MovieCard>
            </Wrapper>
            <Wrapper
              className="col-12 col-sm-12"
              height="190px"
              width="100%"
              marginTop="20px"
            >
              <MovieCard
                fontSize={'1.5em'}
                title={'Velozes e Furiosos 99'}
                image_link={thirdFilmLink}
                slugSearch={'main'}
                id={76}
              ></MovieCard>
            </Wrapper>
          </div>
        </div>
        <Wrapper marginTop={'20px'}>
          <MovieList slug={'trending'} slugSearch={'trending'} />
        </Wrapper>
        <Wrapper marginTop={'20px'}>
          <MovieList slug={'fiction'} slugSearch={'trending'} />
        </Wrapper>
        <Wrapper marginTop={'20px'}>
          <MovieList slug={'action'} slugSearch={'trending'} />
        </Wrapper>
        <Wrapper marginTop={'20px'}>
          <MovieList slug={'commedy'} slugSearch={'trending'} />
        </Wrapper>
        <Wrapper marginTop={'20px'}>
          <MovieList slug={'terror'} slugSearch={'trending'} />
        </Wrapper>
      </div>
    </main>
  )
}
export default Home

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { 'nextauth-token': cookie } = parseCookies(ctx)

  if (cookie === undefined) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
