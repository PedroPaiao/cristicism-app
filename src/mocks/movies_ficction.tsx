interface MovieProps {
  title: string
  description: string
  imageLink: string
  category?: string
}

interface MovieJson {
  movies: MovieProps[]
  slug: string
}

export const moviesFicctionJson: MovieJson = {
  slug: 'Filmes em Ficção',
  movies: [
    {
      title: 'Coringa o filme',
      description: 'Coringa fazendo coringuisses',
      category: 'Ficção',
      imageLink:
        'https://img.elo7.com.br/product/original/2A9E2DD/poster-cartaz-filme-coringa-2019-lancamento.jpg'
    },
    {
      title: 'Max max',
      description: 'Dois amigos muito de loucos',
      imageLink:
        'https://miro.medium.com/max/1400/1*AIMRcE2kVKCFlx8vVSrU9w.jpeg'
    },
    {
      title: 'Cheng XI',
      description: 'Aquele lá da marvel msm',
      imageLink:
        'https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/9830/filme_9830.jpg'
    },
    {
      title: 'Space Jam',
      description: 'Aquele lá dos coelhos que jogam basquete',
      imageLink:
        'https://br.web.img3.acsta.net/pictures/21/08/02/19/37/2769156.jpg'
    },
    {
      title: 'X-men',
      description: 'Cada filme um pouco menos de sentido',
      imageLink:
        'https://br.web.img2.acsta.net/pictures/14/05/08/22/33/194334.jpg'
    },
    {
      title: 'Transformers XX',
      description: 'Aquele lá dos robos que viram carros e comem gente',
      imageLink:
        'https://br.web.img3.acsta.net/pictures/14/06/20/23/27/478475.jpg'
    },
    {
      title: 'Harry Poti e a Predra',
      description: 'The boy who leaves under the tails',
      imageLink:
        'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/95/59/60/20417256.jpg'
    },
    {
      title: 'Harry Poti e a Cobra',
      description: 'The boy who leaves under the tails',
      imageLink:
        'https://img.elo7.com.br/product/zoom/2657601/big-poster-filme-harry-potter-e-a-camara-secreta-lo02-90x60-geek.jpg'
    },
    {
      title: 'Harry Poti e a Fenix',
      description: 'The boy who leaves under the tails',
      imageLink:
        'https://img.elo7.com.br/product/zoom/26579D5/big-poster-harry-potter-e-a-ordem-da-fenix-lo04-tam-90x60-cm-geek.jpg'
    },
    {
      title: 'Harry Poti e o Dragão',
      description: 'The boy who leaves under the tails',
      imageLink:
        'https://veja.abril.com.br/wp-content/uploads/2016/06/harry-potter-cartaz-calice-fogo-04-original1.jpeg?quality=70&strip=info&w=395'
    },
    {
      title: 'Harry Poti e o tal do Enigma',
      description: 'The boy who leaves under the tails',
      imageLink:
        'https://br.web.img3.acsta.net/medias/nmedia/18/92/91/18/20224756.jpg'
    },
    {
      title: 'Avengers',
      description: 'Revenge apenas eles diriam',
      imageLink:
        'https://i.pinimg.com/564x/08/dd/09/08dd09a13fa4ec6f1da8d236fc7fdd73.jpg'
    },
    {
      title: 'Ironman',
      description: 'Yeah, dont tell to anybody, buy, IM IRON MAN',
      imageLink:
        'https://img.elo7.com.br/product/zoom/1DFB189/poster-cartaz-iron-man-homem-de-ferro-poster-tematico.jpg'
    },
    {
      title: 'Homem Aranha longe de casa',
      description: 'Uma aranha nunca cai tão longe assim do jardim eles diriam',
      imageLink:
        'https://br.web.img2.acsta.net/pictures/19/07/05/17/30/5167951.jpg'
    },
    {
      title: 'Batman, Cavaleiro das Trevas',
      description: 'Sim, sou melhor que todos os outros que que vieram antes',
      imageLink:
        'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/86/98/32/19870786.jpg'
    }
  ]
}
