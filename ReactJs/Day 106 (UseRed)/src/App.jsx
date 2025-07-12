import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let btnRef = useRef() // Acces to the DOM element


  useEffect(() => {
    btnRef.current.style.background = "red";
    console.log("First reandering ...")
  }, [])



  return (
    <>

      <div className="card">
        {/* DOM  */}
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>


      {/* Add event Listner */}
      <button onClick={() => {
        btnRef.current.style.display = "none"
      }
      }>Remove the Button</button>
    </>
  )
}

export default App
