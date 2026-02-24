//!ARRUMAR SOMENTE A PARTE DE PREÇO EM BUTTON/ADICOONAR AO CARRINHO

import type { Restaurants } from '../../pages/Home'
import ProductPerfil from '../ProductPerfil'
import ButtonPerfil from '../ButtonPerfil'
import {
  Modal,
  ModalContent,
  PerfilContainer,
  FoodImg,
  CloseImg,
} from './styles'
import close from '../../assets/images/close.png'
// import { Modal, ModalContent, PerfilContainer } from './styles'
// import type Food from '../../models/Food'
// import ButtonPerfil from '../ButtonPerfil'

import { useState } from 'react'

export type Perfilprops = {
  foods: Restaurants['cardapio']
  //   onClick: () => void
}

const ProductPerfilList = ({ foods }: Perfilprops) => {
  const [modalEstaAberta, setModalEstaAberta] = useState(false)
  const [foodSelected, setFoodSelected] = useState<Restaurants['cardapio'][0]>()

  return (
    <div className="container">
      <PerfilContainer>
        {foods.map((food) => (
          <ProductPerfil
            key={food.id}
            image={food.foto}
            title={food.nome}
            description={food.descricao}
            onClick={() => {
                setModalEstaAberta(true);
                setFoodSelected(food)
            }}
          />
        ))}
      </PerfilContainer>
      <Modal className={modalEstaAberta ? 'visible' : ''}>
        <div className="container">
          <div className="overlay"></div>
          <ModalContent>
            <CloseImg onClick={() => setModalEstaAberta(false)} src={close} alt="Ícone de fechar" />
            <FoodImg src={foodSelected?.foto} alt="" />
            <div>
              <h1>{foodSelected?.nome}</h1>
              <p>
                {foodSelected?.descricao}
                <br />
                <br />
                <br />
                Serve: {foodSelected?.porcao}
              </p>
              <ButtonPerfil size="sm">
                Adicionar ao carrinho - R$ 60,90
              </ButtonPerfil>
            </div>
          </ModalContent>
        </div>
      </Modal>
    </div>
  )
}

export default ProductPerfilList
