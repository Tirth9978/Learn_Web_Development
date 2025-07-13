const express = require("express")
const cors = require("cors")
const http = require("http")
const { Server } = require("socket.io")

const app = express();
app.use(express.static("public"))

const server = http.createServer(app)
const port = 3000;

const io = new Server(server)

const MAX_PLAYER_PRE_ROOM = 2;
let roomCounter = 1;
let rooms = {} //  This will store room names and their connected socket IDs

let components = []
io.on("connection", client => {
     console.log("Connected :", client.id);

     let assignedRoom = null;
     for (room in rooms) {
          if (rooms[room].length < MAX_PLAYER_PRE_ROOM) {
               assignedRoom = room;
               break;
          }
     }

     if (!assignedRoom) {
          assignedRoom = `room_${roomCounter++}`;
          rooms[assignedRoom] = [];
     }


     rooms[assignedRoom].push(client.id)


     client.join(assignedRoom)


     console.log(rooms)


     const control = rooms[assignedRoom].length === 1 ? "box1" : "box2"

     client.emit("control", { control, room: assignedRoom })

     client.on("move", (data) => {
          console.log(assignedRoom)
          io.to(assignedRoom).emit("move", data);
     });


     client.on("disconnect", () => {
          console.log("Disconnected:", client.id);
          rooms[assignedRoom] = rooms[assignedRoom].filter(id => id !== client.id);

          // 8️⃣ If room is empty, delete it
          if (rooms[assignedRoom].length === 0) {
               delete rooms[assignedRoom];
          }
     });


})


server.listen(port, () => {
     console.log("I am Running on port", port)
})
