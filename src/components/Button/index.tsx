import { Botao } from './styles'

type Props = {
  children: string
  to: string
}

const Button = ({ children, to }: Props) => <Botao to={to}>{children}</Botao>

export default Button
