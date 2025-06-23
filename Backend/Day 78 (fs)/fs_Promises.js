console.log("Starting")

import { readFile } from "fs"
import fs from "fs/promises"

let a = await fs.readFile("Tom.txt")
console.log(a.toString()) 

console.log("Done :)")