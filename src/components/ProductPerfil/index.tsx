import ButtonPerfil from '../ButtonPerfil'
import { CardPerfil, Description, Image, TitleFood } from './styles'

type PerfilProps = {
  image: string
  title: string
  description: string
}

const ProductPerfil = ({ image, title, description }: PerfilProps) => (
  <CardPerfil>
    <Image src={image} alt={title} />
    <TitleFood>{title}</TitleFood>
    <Description>{description}</Description>
    <ButtonPerfil size="md">Adicionar ao carrinho</ButtonPerfil>
  </CardPerfil>
)

export default ProductPerfil
