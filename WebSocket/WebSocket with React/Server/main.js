const express = require("express")
const cors = require("cors")
const http = require("http")
const { Server } = require("socket.io")

const app = express();
const port = 3000;
app.use(cors());

const server = http.createServer(app)

const io = new Server(server , {
     cors : {origin : "http://localhost:5173"}
})

io.on("connection" , client => {
     console.log("Connected Id : " , client.id)
     client.on("userMessage" , data => {
          console.log("Tirth Patel")
          io.emit("sendToClient" , data)
     })

     client.on("disconnect" , ()=> {
          console.log("'🔴 Client disconnected:", client.id)
     })
})

server.listen(port , ()=> {
     console.log("I am Running :)")
})