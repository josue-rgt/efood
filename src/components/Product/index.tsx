import { Card, Image, Title, Description, Infos } from './styles'
import Nota from '../Nota'
// import imagem from '../../assets/images/imagem.png'
import Tag from '../Tag'
import { Botao } from '../Button/styles'

type Props = {
  image: string
  title: string
  rating: number
  infos: string[]
  description: string
}

const Product = ({ image, title, rating, infos, description }: Props) => (
  <Card>
    <Image src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Description>
      <div>
        <Title>{title}</Title>
        <Nota>{rating}</Nota>
      </div>
      <p>{description}</p>
      <Botao>Saiba mais</Botao>
    </Description>
  </Card>
)

export default Product
