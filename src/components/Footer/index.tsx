import { ImageFooter, Social, AboutUs } from './styles'
import LogoEfood from '../Logo'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.png'
import backFooter from '../../assets/images/backFooter.png'

const Footer = () => (
  <ImageFooter style={{ backgroundImage: `url(${backFooter})` }}>
    <div>
      <LogoEfood />
      <Social>
        <li>
          <a href="https://instagram.com">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://facebook.com">
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="https://x.com" target="_blank">
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
      </Social>
      <AboutUs>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </AboutUs>
    </div>
  </ImageFooter>
)

export default Footer
