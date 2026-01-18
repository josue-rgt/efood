import { BotaoPerfil } from './styles'

type Props = {
  size: 'sm' | 'md'
  children: string
}

const ButtonPerfil = ({ size,children }: Props) => (
  <BotaoPerfil size={size}>{children}</BotaoPerfil>
)

export default ButtonPerfil
