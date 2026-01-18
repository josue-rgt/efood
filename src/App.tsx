import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Rotas from './routes'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './pages/Home'
// import Perfil from './pages/Perfil'

// const rotas = createBrowserRouter([
//   {
//     path: '/home',
//      element: <Home />,
//   },
//   {
//     path: '/perfil',
//     element: <Perfil />
//   }
// ])

function App() {
  return (
    // <>
    //   <GlobalCss />
    //   <RouterProvider router={rotas} />
    // </>
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
