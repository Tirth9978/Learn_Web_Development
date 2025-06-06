async function getData() {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               console.log("Finding Data")
               resolve()
          }, 3000);
     })
}

async function main() {
     console.log("I will find the data")

     console.log("Waiting for Data get ready")
     let data = await getData()
     console.log("You Can Start Work Data is ready")

     console.log("End of Line")
}

main()