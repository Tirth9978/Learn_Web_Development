let a = prompt("Enter the First Number : ")
let b = prompt("Enter the Second Number : ")

if (isNaN(a) || isNaN(b)) {
     throw SyntaxError ("This is not Valid:(")
}

// Making the String as INT
let sum = parseInt(a) + parseInt(b)
console.log("Sum is " ,sum)