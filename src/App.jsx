import { Outlet } from 'react-router-dom'
import Header from "./components/Header"
import Contato from './routes/Contato/index.jsx';
import './App.css'

function App() {
  
  return (
    <>
      <Header/>
      <Outlet/>
      <Contato/>
    </>
  )
}

export default App
