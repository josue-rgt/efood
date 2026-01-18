import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import ProductPerfilList from '../../components/ProductPerfilList'
import catalogo from '../../data/catalogo'
import catalogoItaliana from '../../data/catalogoItaliana'

const Perfil = () => (
  <>
    <Nav food={catalogo[1]} />
    <ProductPerfilList foods={catalogoItaliana} />
    <Footer />
  </>
)

export default Perfil
