import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [form, setForm] = useState({ name: "", email: "", password: "" })


  const sending = async () => {
    const Name = String(document.getElementById("name").value)
    const Email = String(document.getElementById("email").value)
    const Password = String(document.getElementById("password").value)

    await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      
      body : JSON.stringify({name : Name , email : Email , password:Password})
    })
    .then(res => res.json())
    .then (data => {
      console.log(data.Message)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <input type=""
          placeholder='Name'
          id='name'
        />
        <input type="text"
          placeholder='Email' id='email' />
        <input type="password"
          placeholder='password'
          id='password'
        />
        <button onClick={sending}>Submit</button>
      </div>
    </>
  )
}

export default App
