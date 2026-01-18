import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import catalogo from '../../data/catalogo'

const Home = () => (
  <>
    <Header />
    <ProductList foods={catalogo} />
    <Footer />
  </>
)

export default Home
