import Product from '../Product'
import { ListContainer } from './styles'
import type Food from '../../models/Food'

export type Props = {
  foods: Food[]
}

const ProductList = ({ foods }: Props) => (
  <div className="container">
    <ListContainer>
      {foods.map((food) => (
        <Product
          key={food.id}
          image={food.image}
          title={food.title}
          rating={food.rating}
          infos={food.infos}
          description={food.description}
        />
      ))}
    </ListContainer>
  </div>
)

export default ProductList
