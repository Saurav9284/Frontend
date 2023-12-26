import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "./Components/Home"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes