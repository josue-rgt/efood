import { useState, useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
// import catalogo from '../../data/catalogo'

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const Home = () => {
  const [locais, setLocais] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setLocais(res))
  }, [])

  if (!locais) return <h1>Carregando...</h1>

  return (
    <>
      <Header />
      <ProductList restaurantes={locais} />
      <Footer />
    </>
  )
}

export default Home
