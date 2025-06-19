const fs = require("fs").promises

async function main() {
     try {
          fs.writeFile("tirth.txt" , "Tirth Patel",'utf8')
     }
     catch(err) {
          console.log("Error is comming:(")
          console.log(err.message);
          return ;
     }
     console.log("Done :)")
}

main()