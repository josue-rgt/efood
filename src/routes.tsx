import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
// import FoodItem from './pages/FoodItemREVISAR'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
    {/* <Route path="/food" element={<FoodItem/>} /> */}
    {/* <Route path="/food/:id" element={<FoodItem/>} /> */}
  </Routes>
)

export default Rotas
