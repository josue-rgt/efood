import { Botao } from './styles'

type Props = {
  children: string
}

const Button = ({ children }: Props) => <Botao as={'button'}>{children}</Botao>

export default Button
