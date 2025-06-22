console.log("app.js is running:)")

const fs = require("fs")
const lodash = require("lodash")
const note = require("./note.js")

const yargs = require("yargs")

// console.log(
console.log(process.argv)
console.log(yargs(process.argv.slice(2)).argv)
