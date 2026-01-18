import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  //!font-family: Roboto, sans-serif;
  position: relative;

  ${TagContainer} {
    margin-left: 8px;
  }
`

export const Image = styled.img`
  display: block;
  width: 472px;
  height: 217px;
`

export const Description = styled.p`
  height: 181px;
  padding: 8px;
  border: 1px solid red;
  border-top: 0;

  p {
    font-weight: 400;
    font-style: Regular;
    font-size: 14px;
    line-height: 22px;
    padding: 16px 0px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`
export const Title = styled.h2`
  font-weight: 700;
  font-style: Bold;
  font-size: 18px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
