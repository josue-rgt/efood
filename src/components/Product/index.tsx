import { Card, Image, Title, Description, Infos } from './styles'
import Nota from '../Nota'
import Tag from '../Tag'
import Button from '../Button'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  image: string
  title: string
  rating: number
  //   infos: string[]
  infos: string
  description: string
}

const Product = ({ id, image, title, rating, infos, description }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
    }

    return descricao
  }

  return (
    <Card>
      <Image src={image} alt={title} />
      <Infos>
        {/* {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))} */}
        <Tag>{infos}</Tag>
      </Infos>
      <Description>
        <div>
          <Title>{title}</Title>
          <Nota>{rating}</Nota>
        </div>
        <p>{getDescricao(description)}</p>
        {/* <Button to='/perfil'>Saiba mais</Button> */}
        <Link to={`/perfil/${id}`}>
          <Button>Saima mais</Button>
        </Link>
      </Description>
    </Card>
  )
}
export default Product
