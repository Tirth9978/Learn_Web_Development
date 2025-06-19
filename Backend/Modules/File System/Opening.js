const fs = require("fs").promises

let fileDate ;

async function main(){
     try {
          fileDate = await fs.readFile("tirth.txt","utf8")
          console.log(fileDate)
     }catch(err) {
          console.log("File is not Exist  :(")
     }
}

main()