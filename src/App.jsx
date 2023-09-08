import { Outlet } from 'react-router-dom'
import Contato from "./complements/Contato"
import Header from "./complements/Header"
import './App.css'

function App() {
  
  return (
    <>
      <Header/>
      <Contato/>
    </>
  )
}

export default App
