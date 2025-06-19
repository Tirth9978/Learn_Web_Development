const fs = require("fs").promises

async function main() {
     try {
          fs.appendFile("tirth.txt"," is from USA","utf8");
          console.log("Done")
     }
     catch(err) {
          console.log(err.message)
     }
}

main()