import styled from 'styled-components'
import { cores } from '../../styles'

type BotaoPerfilProps = {
  size: 'sm' | 'md'
}

export const BotaoPerfil = styled.button<BotaoPerfilProps>`
  font-size: 14px;
  font-weight: 700;
  width: ${({size}) => size === 'sm' ? '218px' : '304px'};
  height: 24px;
  color: ${cores.vermelho};
  background-color: ${cores.bege};
  border: none;
  cursor: pointer;
`
