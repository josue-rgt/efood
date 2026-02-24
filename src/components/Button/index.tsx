import { Botao } from './styles'

type Props = {
  children: string
}

const Button = ({ children }: Props) => <Botao>{children}</Botao>

export default Button
