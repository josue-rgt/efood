import styled from 'styled-components'
import { cores } from '../../styles'

export const ImageNav = styled.div`
  width: 100%;
  height: 163px;

  div {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }

  .cart {
    justify-self: end;
  }
`

export const ImageFood = styled.div`
  height: 280px;
  background-size: 100% 280px;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  div {
    position: relative;
    z-index: 2;
  }

  p {
    color: ${cores.branco};
    font-size: 32px;
  }
`
export const Text = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.vermelho};
  padding-top: 59px;
`

export const TypeFood = styled.p`
  font-weight: 100;
  padding-top: 25px;
`

export const NameFood = styled.p`
  font-weight: 900;
  padding-top: 144.5px;
`
