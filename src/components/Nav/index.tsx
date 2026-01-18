import LogoEfood from '../Logo'
import { Text, ImageNav, ImageFood, TypeFood, NameFood } from './styles'
import backHeader from '../../assets/images/backHeader.png'
import type Food from '../../models/Food'

type Props = {
  food: Food
}

const Nav = ({ food }: Props) => (
  <>
    <ImageNav style={{ backgroundImage: `url(${backHeader})` }}>
      <div className="container">
        <Text>Restaurantes</Text>
        <LogoEfood />
        <Text className="cart">0 produto(s) no carrinho</Text>
      </div>
    </ImageNav>

    <ImageFood style={{ backgroundImage: `url(${food.imageNav})` }}>
      <div className="container">
        <TypeFood>{food.infos}</TypeFood>
        <NameFood>{food.title}</NameFood>
      </div>
    </ImageFood>
  </>
)
export default Nav
