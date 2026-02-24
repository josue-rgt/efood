import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
// import Nav from '../../components/Nav'
import ProductPerfilList from '../../components/ProductPerfilList'
import type { Restaurants } from '../Home'
import Nav from '../../components/Nav'
// import catalogo from '../../data/catalogo'
// import catalogoItaliana from '../../data/catalogoItaliana'

// import type { Food } from '../../pages/Home'

const Perfil = () => {
  const { id } = useParams<{ id: string }>()
  //   console.log(id)

  const [restaurante, setRestaurante] = useState<Restaurants | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) return <h1>Carregando...</h1>

  return (
    <>
      <Nav restaurantCover={restaurante} />
      <ProductPerfilList foods={restaurante.cardapio} />
      <Footer />
    </>
  )
}
export default Perfil
