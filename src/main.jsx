import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './routes/Login/index.jsx'
import CadastroBike from './routes/CadastroBike/index.jsx'
import Error from './routes/Error/index.jsx'
import Home from './routes/Home/index.jsx'
import Contato from './routes/Contato/index.jsx'
import Equipe from './routes/Equipe/index.jsx'
import MinhasBikes from './routes/MinhasBikes/index.jsx'
import Vistoria from './routes/Vistoria/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    // endereço url errado    
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      }, 
      {
        path: '/cadastro-bike',
        element: <CadastroBike/>
      },
      {
        path: '/contato',
        element: <Contato/>
      },
      {
        path: '/equipe',
        element: <Equipe/>
      }, 
      {
        path: '/minhas-bikes',
        element: <MinhasBikes/>
      },
      {
        path: '/vistoria',
        element: <Vistoria/>
      },
      {
        path: '/antiga',
        element: <Navigate to='/Home'/>
      }
    ] 
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
