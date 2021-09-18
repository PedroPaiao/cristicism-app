interface MovieProps {
  id: number
  title: string
  description: string
  imageLink: string
  trailerLink: string
  year?: number
  director?: string
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
      trailerLink: 'https://www.youtube.com/embed/Gm3o0bfGP3g',
      year: 2021,
      director: 'Cate Shortland',
      imageLink:
        'https://img.elo7.com.br/product/original/2A9E2DD/poster-cartaz-filme-coringa-2019-lancamento.jpg'
    },
    {
      id: 75,
      title: 'Doutor Estranho',
      description:
        'Após sua carreira ser destruída, um brilhante, porém arrogante, cirurgião ganha uma nova chance em sua vida quando um feiticeiro o treina para se tornar o Mago Supremo.',
      category: 'Ficção',
      trailerLink: 'https://www.youtube.com/embed/Gm3o0bfGP3g',
      year: 2016,
      director: 'Scott Derrickson',
      imageLink:
        'https://img.elo7.com.br/product/original/2A9E2DD/poster-cartaz-filme-coringa-2019-lancamento.jpg'
    },
    {
      id: 76,
      title: 'Velozes e furiosos 8',
      description:
        'Depois que Brian e Mia se aposentaram, e o resto da equipe foi exonerado, Dom e Letty estão em lua de mel e levam uma vida pacata e completamente normal.',
      category: 'Ficção',
      trailerLink: 'https://www.youtube.com/embed/KvSlvtPnZTo',
      year: 2017,
      director: 'F. Gary Gray',
      imageLink:
        'https://img.elo7.com.br/product/original/2A9E2DD/poster-cartaz-filme-coringa-2019-lancamento.jpg'
    }
  ]
}
