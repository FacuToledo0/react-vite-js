import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import UsersContainer from './Components/Users/UsersContainer'
import AlbumsContainer from './Components/Albums/AlbumsContainer'
import PostsContainer from './Components/Posts/PostsContainer'

import { Menubar } from 'primereact/menubar'
import Home from './Components/Home'

import CreateUser from './Components/Users/CreateUser'

function App() {

  const items = [
    { label:'Inicio', icon:'pi pi-home', url:'/'},
    { label:'Usuarios', icon:'pi pi-users', url:'/usuarios'},
    { label:'Albums', icon:'pi pi-book', url:'/albums'},
    { label:'Posts', icon:'pi pi-circle', url:'/posts'},
    { label:'Nuevo usuario', icon:'pi pi-user-plus', url:'/registered'},
  ]

  return (
    <BrowserRouter>
    <Menubar model={items} />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/usuarios' element={<UsersContainer/>} />
      <Route path='/albums' element={<AlbumsContainer/>}/>
      <Route path='/posts' element={<PostsContainer/>}/>
      <Route path='/registered' element={<CreateUser/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
