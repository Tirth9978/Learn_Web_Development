import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [value, setValue] = useState(
    [
      {
        name: "Tirth",
        dec: "I am from India"
      }
      ,
      {
        name: "Tom",
        dec: "I am from USA"
      },
      {
        name: "Rohan",
        dec: "I am from UK"
      }
    ]
  )

  const Todo = (props) => {
    return (
      <>
        <div className="main">
          <div>{props.name}</div>
          <div>{props.dec}</div>
        </div>
      </>
    )
  }


  return (
    <>

      {value.map(info => {
        // return (<Todo key = {info.name} name = {info.name} dec = {info.dec} />)

        return (
          <div className="main">
            <div>{props.name}</div>
            <div>{props.dec}</div>
          </div>
        )
      })}
    </>
  )
}

export default App
