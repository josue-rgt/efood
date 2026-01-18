import styled from 'styled-components'
import { tagStyles } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Botao = styled(Link)`
  all: unset;
  ${tagStyles}
  cursor: pointer;
`
// export const Botao = styled.button`
//   all: unset;
//   ${tagStyles}
//   cursor: pointer;
// `
