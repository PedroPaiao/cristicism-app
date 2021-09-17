interface MovieProps {
  id: number
  title: string
  description: string
  imageLink: string
  category?: string
}

interface MovieJson {
  movies: MovieProps[]
  slug: string
  slugSearch: string
}

export const moviesMainJson: MovieJson = {
  slug: 'Filmes principais',
  slugSearch: 'main',
  movies: [
    {
      id: 74,
      title: 'Viuva Negra',
      description: 'Coringa fazendo coringuisses',
      category: 'Ficção',
      imageLink:
        'https://img.elo7.com.br/product/original/2A9E2DD/poster-cartaz-filme-coringa-2019-lancamento.jpg'
    },
    {
      id: 75,
      title: 'Doutor Estranho',
      description: 'Coringa fazendo coringuisses',
      category: 'Ficção',
      imageLink:
        'https://img.elo7.com.br/product/original/2A9E2DD/poster-cartaz-filme-coringa-2019-lancamento.jpg'
    },
    {
      id: 76,
      title: 'Velozes e furiosos',
      description: 'Coringa fazendo coringuisses',
      category: 'Ficção',
      imageLink:
        'https://img.elo7.com.br/product/original/2A9E2DD/poster-cartaz-filme-coringa-2019-lancamento.jpg'
    }
  ]
}
