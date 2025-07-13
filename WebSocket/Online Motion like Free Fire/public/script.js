const socket = io();

let boxes = {
     box1: document.getElementById("box-1"),
     box2: document.getElementById("box-2")
}

let positions = {
     PositionOfBox1: {
          top: 100,
          left: 0
     },
     PositionOfBox2: {
          top: 200,
          left: 0
     }
}

let control = "box1"

socket.on("control", data => {
     control = data.control

     const room = data.room ;
     console.log("You are controlling:", control);
     console.log("You are in room:", room);

     // window.location.href = `/index.html?room=${room}`;
})

document.addEventListener("keydown", (event) => {
     const box = boxes[control]
     // let pos;
     // if (control === "box1") {
     //      pos = positions.PositionOfBox1
     // }
     // else {
     //      pos = positions.PositionOfBox2
     // }

     let pos = control === "box1" ? positions.PositionOfBox1 : positions.PositionOfBox2;
     if (event.key === "ArrowUp" && pos.top >= 10) {
          pos.top -= 10;
     } else if (event.key === "ArrowDown" && pos.top <= window.innerHeight - 60) {
          pos.top += 10;
     } else if (event.key === "ArrowLeft" && pos.left >= 10) {
          pos.left -= 10;
     } else if (event.key === "ArrowRight" && pos.left <= window.innerWidth - 60) {
          pos.left += 10;
     }
     
          box.style.top = pos.top + "px";
          box.style.left = pos.left + "px";
     


     socket.emit("move", {
          box: control,
          position: {
               top: pos.top,
               left: pos.left
          }
     })
})


socket.on("move", (data) => {
     const box = boxes[data.box]

     if (box) {
          box.style.left = `${data.position.left}px`
          box.style.top = `${data.position.top}px`

          if (data.box === "box1") {
               positions.PositionOfBox1 = data.position;
          } else {
               positions.PositionOfBox2 = data.position;
          }
     }
})

