import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn , setshowBtn] = useState(false)

  return (
    <>
      



      {/* {showBtn ? <p>I am Tirth Patel</p> : <p>No</p>} */}

      {showBtn && <p>I am Tirth Patel</p>}


      
      <div className="card">
        <button  onClick={()=>{
          setshowBtn(true);
        }}>
          click on Me
        </button>
      </div>
      
    </>
  )
}

export default App
