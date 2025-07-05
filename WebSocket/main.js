const express = require("express")
const http = require("http");
const { Socket } = require("net");

const app = express();


const server = http.createServer(app)
app.use(express.static("./public"))
const port = 3000;

//  -----------------------------------------------------------

// Socket will start from Here 

const {Server } = require("socket.io")

const io = new Server(server)  // Normal Input/Output


// Whenever My connetion will be made then this CallBack Funtion will run 
io.on( "connection" , client => {
     client.on("UserMassage" , (text) =>{ // Taking the Message from the Client
          console.log("New User " , text)
          io.emit("Message" , text)
     })
})





// ---------------------------------------------------------------------
app.get("/",(req,res)=>{
     return res.send("./public/index.html")
})

server.listen(port, ()=>{
     console.log("I am Running on the 3000")
})