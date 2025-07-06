const express = require("express")
const http = require("http")
const cors = require("cors")
const { Server } = require("socket.io")
const { Socket } = require("net");
const app = express()
app.use(cors())
app.use(express.static("./public"))
const port = 3000
const server = http.createServer(app)

const io = new Server(server)

io.on("connection", client => {
     client.on("userMessage", text => {
          console.log(text)
          io.emit("byServer", text)
     })
})

app.get("/", (req, res) => {
     res.send("./public/index.html")
})

server.listen(port, () => {
     console.log("I am Running :)")
})