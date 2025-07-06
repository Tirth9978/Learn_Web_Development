const socket = io();


document.getElementById("bu").addEventListener("click", () => {
     let text = String(document.querySelector("input").value)

     if (text == "") {
          return;
     }
     socket.emit("userMessage", text)

})

let i = 0;

socket.on("byServer", text => {
     const info = document.querySelector(".info")

     const div = document.createElement("div")
     div.className = `content${i}`
     i++;
     div.textContent = text;
     info.append(div)
})