import ButtonPerfil from '../ButtonPerfil'
import { CardPerfil, Description, Image, TitleFood } from './styles'

type PerfilProps = {
  image: string
  title: string
  description: string
  onClick: () => void
}

const ProductPerfil = ({ image, title, description, onClick }: PerfilProps) => {
  const getDescricao = (descricao: string) => {
    if (!descricao) return ''

    if (descricao.length > 168) {
      return descricao.slice(0, 165) + '...'
    }

    return descricao
  }

  return (
    <CardPerfil>
      <Image src={image} alt={title} />
      <TitleFood>{title}</TitleFood>
      <Description>{getDescricao(description)}</Description>
      <ButtonPerfil onClick={onClick} size="md">
        Mais detalhes
      </ButtonPerfil>
    </CardPerfil>
  )
}

export default ProductPerfil
