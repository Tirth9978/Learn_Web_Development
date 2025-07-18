import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { io } from "socket.io-client"

// const socket = 
const socket = io('http://localhost:3000');

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.on("sendToClient", data => {
      console.log("tom")
      setMessages(prev => [...prev, data])
    })

    return () => {
      socket.off("sendToClient");
    }
  }, [])

  const sendingMessage = () => {
    if (input.trim() !== '') {
      console.log("Patel")
      socket.emit("userMessage", input)
      setInput("")
    }
  }

  return (
    <>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message"
          style={{ padding: '0.5rem', width: '70%' }}
        />

        <button onClick={sendingMessage}>Send</button>
      </div>

      <div>
        {
          messages.map((info, i) => {
            return <div key={i}>🗨️ {info}</div>;
          })
        }
      </div>
    </>
  )
}

export default App
