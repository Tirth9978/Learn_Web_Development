console.log("main.js is running right now :)")
const lodash = require("lodash");

console.log(lodash.isString("Tirth"))
console.log(lodash.isString(12))
console.log(lodash.isString(false))
console.log(lodash.isString(2.3))

let arr = [1,1,2,2,3,3,4,4,5,5]

arr = lodash.uniq(arr)
console.log(arr)