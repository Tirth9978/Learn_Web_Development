const fs = require("fs").promises

async function main() {
     try {
          let file = await fs.open("Tirth.txt","w")
          await file.write("I am Tirth\n")
          await file.write("I am from USA\n")
          await file.write("Follow me on the Github \n")
          console.log("Done :)")
     }
     catch(err) {
          console.log(err.message)
     }
}

main();