import ProductPerfil from '../ProductPerfil'
import { PerfilContainer } from './styles'
import type Food from '../../models/Food'

export type Perfilprops = {
  foods: Food[]
}

const ProductPerfilList = ({ foods }: Perfilprops) => (
  <div className="container">
    <PerfilContainer>
      {foods.map((food) => (
        <ProductPerfil
          key={food.id}
          image={food.image}
          title={food.title}
          description={food.description}
        />
      ))}
    </PerfilContainer>
  </div>
)

export default ProductPerfilList
