import { ImageHeader, Title } from './styles'
import backHeader from '../../assets/images/backHeader.png'
import LogoEfood from '../Logo'

const Header = () => (
  <ImageHeader style={{ backgroundImage: `url(${backHeader})` }}>
    <div className="container">
      <LogoEfood />
      <Title>
        Viva experiências gastronômicas
        <br /> no conforto da sua casa
      </Title>
    </div>
  </ImageHeader>
)

export default Header
