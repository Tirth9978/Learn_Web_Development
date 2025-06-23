console.log("starting")
const fs = require("fs")

fs.readFile("Tom.txt",(error,data)=>{
     console.log(error,data)

     console.log(data.toString())
})