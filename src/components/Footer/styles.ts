import styled from 'styled-components'

export const ImageFooter = styled.div`
  width: 100%;
  height: 298px;
  background-repeat: no-repeat;
  background-size: cover;

  div {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`

export const Social = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 36px 0px 70px 0px;

  img {
    width: 24px;
    height: 24px;
  }
`
export const AboutUs = styled.div`
  width: 480px;
  height: 24px;
  display: flex;
  margin: auto;

  p {
    font-weight: 400;
    font-style: Regular;
    font-size: 10px;
    text-align: center;
  }
`
