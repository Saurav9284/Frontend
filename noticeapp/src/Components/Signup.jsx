import React from 'react'
import { useState } from 'react';
const Signup = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone_number, setPhone] = useState("");
    const [department, setDepart] = useState("");

    const hanldlesubmit = () => {
        const payload = {
            name,
            email,
            password,
            phone_number,
            department
        }
        fetch("http://localhost:8000/user/signup",{
            method : "POST",
            headers: {
                'Content-Type' : "application/json",
            },
            body: JSON.stringify(payload)
        })
        .then((res)=> res.json())
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))
    }

  return (
    <div>
      <h1>Signup</h1>
      <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
      <input type="text" placeholder='phone' onChange={(e)=>setPhone(e.target.value)}/>
      <input type="text" placeholder='department' onChange={(e)=>setDepart(e.target.value)}/>
      <button onClick={hanldlesubmit}>Signup</button>
    </div>
  )
}

export default Signup