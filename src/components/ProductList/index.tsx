import type { Restaurants } from '../../pages/Home'
import { ListContainer } from './styles'
import Product from '../Product'

export type Props = {
  restaurantes: Restaurants[]
}

const ProductList = ({ restaurantes }: Props) => (
  <div className="container">
    <ListContainer>
      {restaurantes.map((restaurante) => (
        <Product
          key={restaurante.id}
          id={restaurante.id}
          image={restaurante.capa}
          title={restaurante.titulo}
          rating={restaurante.avaliacao}
          infos={restaurante.tipo}
          description={restaurante.descricao}
        />
      ))}
    </ListContainer>
  </div>
)

export default ProductList
