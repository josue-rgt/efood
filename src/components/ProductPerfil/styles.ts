import styled from 'styled-components'
import { cores } from '../../styles'

export const CardPerfil = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.vermelho};
  padding: 8px;
`

export const TitleFood = styled.h1`
  font-size: 16px;
  font-weight: 900;
  color: ${cores.bege};
  padding: 8px 0px;
`

export const Description = styled.p`
  color: ${cores.bege};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding-bottom: 8px;
`

export const Image = styled.img`
  display: block;
  width: 304px;
  height: 167px;
`
