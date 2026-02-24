import { Link } from 'react-router-dom'
import imgEfood from '../../assets/images/imgEfood.png'
import { Logo, LogoLink } from './styles'

// const LogoEfood = () => <Logo src={imgEfood} alt="EFOOD" />

const LogoEfood = () => (
  <LogoLink>
    <Link to="/">
      <Logo src={imgEfood} alt="EFOOD" />
    </Link>
  </LogoLink>
)

export default LogoEfood
