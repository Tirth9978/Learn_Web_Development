console.log("I am Runing:)")

const fs = require("fs");
const os = require("os");
const New = require("./new.js")

console.log(os.userInfo())

fs.appendFile("Tirth.txt",`Hello ${os.userInfo().username}\n` ,(err)=>{
     if (err){
          console.log("File is not Exist:(")
     }
})

console.log(New.age)