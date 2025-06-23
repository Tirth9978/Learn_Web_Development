console.log("Starting")

const fs = require("fs")

fs.appendFile("Tom.txt","\nHe is from USA",(error,data)=>{
     console.log(data)
})