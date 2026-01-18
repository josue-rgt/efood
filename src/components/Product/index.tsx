import { Card, Image, Title, Description, Infos } from './styles'
import Nota from '../Nota'
import Tag from '../Tag'
import Button from '../Button'

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
      <Button to='/perfil'>Saiba mais</Button>
    </Description>
  </Card>
)

export default Product
