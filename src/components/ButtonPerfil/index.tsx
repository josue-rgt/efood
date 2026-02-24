import { BotaoPerfil } from './styles'

type Props = {
  size: 'sm' | 'md'
  children: string 
  onClick?: () => void
}

const ButtonPerfil = ({ size,children, onClick }: Props) => (
  <BotaoPerfil onClick={onClick} size={size}>{children}</BotaoPerfil>
)

export default ButtonPerfil
