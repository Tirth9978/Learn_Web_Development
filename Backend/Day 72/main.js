console.log("I am Runing:)")

const fs = require("fs");
const os = require("os");

console.log(os.userInfo().username)

fs.appendFile("Tirth.txt",`Hello ${os.userInfo().username}\n` ,(err)=>{
     if (err){
          console.log("File is not Exist:(")
     }
})