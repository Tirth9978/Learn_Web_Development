let arr = [1,2,3,4,5]

console.log(arr.toString())  // Making whole array to string

console.log(arr.join('-'))
console.log(arr.join('='))
console.log(arr.join(" and "))

console.log(typeof (arr.join("-")))


arr.pop()    // Removing the last elements
console.log(arr)

arr.push(10)    // Push an elements at the end of an array 
console.log(arr)    

arr.shift()   // remove the first element and return that elements
console.log(arr) 

arr.unshift(12) // Add the elemets to front and return the lenght of the array
console.log(arr)

delete arr[2]  // Delete an array element 
console.log(arr)

let a1 = [1,2,3,4]
let a2 = [5,6,7]
let a3 = [8,9,10]
console.log(a1.concat(a2,a3))   

let a = [6,2,8,3,1,4]
a.sort() // Helps to sort an array 
console.log(a)

let b = [1,2,3,4,5,6]
console.log(b.splice(1,2))