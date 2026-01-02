import estrela from '../../assets/images/estrela.png'
import { Image, NotaContainer, Title } from './styles'

type Props = {
  children?: number
}

const Nota = ({ children }: Props) => (
  <NotaContainer>
    <Title>{children}</Title>
    <Image src={estrela} alt="Estrela" />
  </NotaContainer>
)

export default Nota
