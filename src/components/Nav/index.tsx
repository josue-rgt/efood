import LogoEfood from '../Logo'
import { Text, ImageNav, ImageRestaurant, TypeRestaurant, NameRestaurant } from './styles'
import backHeader from '../../assets/images/backHeader.png'
// import type Food from '../../models/Food'

import type { Restaurants } from '../../pages/Home'


type Props = {
  restaurantCover: Restaurants
}

const Nav = ({ restaurantCover }: Props) => (
  <>
    <ImageNav style={{ backgroundImage: `url(${backHeader})` }}>
      <div className="container">
        <Text>Restaurantes</Text>
        <LogoEfood />
        <Text className="cart">0 produto(s) no carrinho</Text>
      </div>
    </ImageNav>

    <ImageRestaurant style={{ backgroundImage: `url(${restaurantCover.capa})` }}>
      <div className="container">
        <TypeRestaurant>{restaurantCover.tipo}</TypeRestaurant>
        <NameRestaurant>{restaurantCover.titulo}</NameRestaurant>
        {/* <TypeFood>{food.infos}</TypeFood>
        <NameFood>{food.title}</NameFood> */}
      </div>
    </ImageRestaurant>
  </>
)
export default Nav
