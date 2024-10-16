import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyButton from './Components/MyButton'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UsersContainer from './Components/Users/UsersContainer'
import { Menubar } from 'primereact/menubar';
import Home from './Components/Home'
import CreateUser from './Components/Users/CreateUser'  

function App() {
  const [count, setCount] = useState(0)

  const items = [
    { label:'Inicio', icon:'pi pi-home', url:'/'},
    { label:'Usuarios', icon:'pi pi-users', url:'/usuarios'},
    { label:'Nuevo usuario', icon:'pi pi-user-plus', url:'/nuevo-usuario'},
  ]

  return (
    <BrowserRouter>
    <Menubar model={items} />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/usuarios' element={<UsersContainer />} />
      <Route path='/nuevo-usuario' element={<CreateUser />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
