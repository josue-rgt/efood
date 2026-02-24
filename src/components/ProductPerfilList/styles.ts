import styled from 'styled-components'
import { cores } from '../../styles'

export const PerfilContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 56px;
  margin-bottom: 120px;
  gap: 32px;
`
export const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  align-items: center;
  justify-content: center;

  /* .container {
    display: flex;
    padding: 32px;
    background-color: ${cores.vermelho};
  } */

  &.visible {
    display: flex;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const FoodImg = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const ModalContent = styled.div`
  display: flex;
  position: relative;
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px;
  height: 344px;

  div {
    padding: 0 32px 0 24px;
  }

  h1 {
    color: ${cores.branco};
    font-size: 18px;
  }
  p {
    font-size: 14px;
    color: ${cores.branco};
    width: 656px;
    height: 176px;
    margin: 16px 0;
  }
`
export const CloseImg = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`
