import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const work = (name)=>{
    alert(`I am ${name}`)
  }
  const work1 = (name)=>{
    alert(`I am Tirth`)
  }

  const work2 = (b)=>{
    alert(b.type)
  }
  return (
    <>
      {/* Normal Thing */}
      <button onClick={()=>work("Tom")}>Click on me</button>
      <button onClick={work1}>Click on me</button>

      {/* React Event Object */}
      <button onClick={(event)=>{work2(event)}}></button>
    </>
  )
}

export default App
