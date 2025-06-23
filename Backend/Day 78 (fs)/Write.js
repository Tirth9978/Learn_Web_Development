console.log("Starting")

const fs = require("fs")

// console.log(fs)

// fs.writeFileSync("Tirth.txt","I am Tirth Patel")


// This is the best way to write 
fs.writeFile("Tom.txt","I am Tom",()=>{
     console.log("Done")
})

console.log("Ending")