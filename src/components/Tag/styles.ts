import styled, { css } from 'styled-components'
import { cores } from '../../styles'

export const tagStyles = css`
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  padding: 4px 6px;
  font-size: 14px;
  align-items: center;
  font-weight: 700;
  display: inline;
`

export const TagContainer = styled.span`
  ${tagStyles}
`
