import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'

function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState(0)

    // Run for the every Render
    useEffect(() => {
        alert("Every Render I will run ")
    })


    // Run only on the First Render
    useEffect(() => {
        alert("Hello I am Tirth")
    }, [])

    // Whenever My count Will change then This will run 
    useEffect(() => {
        alert("count Will be Chnage")
        setColor(color + 1)
    }, [count])


    
    return (
        <>
            {/* <NavBar color={"red" + color} /> */}
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
