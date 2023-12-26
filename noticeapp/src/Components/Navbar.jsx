import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();
  
    const login = () => {
        navigate("/login")
    }
    const signup = () => {
        navigate("/signup")
    }
    const home = () => {
        navigate("/")
    }

  return (
    <div>
       <button onClick={login}>Login</button>
       <button onClick={signup}>Signup</button>
       <button onClick={home}>Home</button>
    </div>
  )
}

export default Navbar
