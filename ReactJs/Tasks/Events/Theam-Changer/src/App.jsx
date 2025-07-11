import { useState } from 'react'
import './App.css'

function App() {
  const [backColor, setBackcolor] = useState("black")
  const [fontColor, setFontcolor] = useState("white")

  return (
    <>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio mollitia sed rem aut. In sint ut ullam animi, dicta reiciendis pariatur est voluptates saepe quaerat delectus ducimus fugit optio aut sunt facere, eligendi libero. Nobis eveniet quibusdam accusantium nam corrupti quod fugiat aperiam, magnam itaque aut debitis porro id ex, nulla sunt nesciunt quasi, quae et? Esse, sed minus earum aperiam alias fugit atque repellendus rem ad accusantium nesciunt iure quaerat ex autem inventore nemo ratione error aliquam doloremque soluta. Explicabo qui magni eos neque consectetur, voluptatum ipsum quidem tempore. Minus labore quidem magnam consequuntur ad iure dolorem ipsam, atque neque aliquam aspernatur, fuga voluptatum assumenda deserunt molestiae laborum fugit veniam ea pariatur odit eos! Velit praesentium consequatur totam accusamus cum! Vero, optio.
      <button onClick={() => {
        if (backColor == "black") {
          setBackcolor("white")
          setFontcolor("black")
          document.body.style.background = backColor
          document.body.style.color = fontColor
        }
        else {
          setBackcolor("black")
          setFontcolor("white")
          document.body.style.background = backColor
          document.body.style.color = fontColor
        }
      }}></button>
    </>
  )
}

export default App
