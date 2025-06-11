let [x,y] = [1,2]   // x = 1 and y = 2
console.log(x)
console.log(y)


// For more then Two Value

let [p, q , ...rest] = [1,2,3,4,5,6,7,8,9,10]   // a = 1 ,b = 2 , ...rest = [3,4,5,6,7,8,9,10]

console.log(p)
console.log(q)
console.log(...rest)


// For Objects 

let obj = {
     a : 1 ,
     b : 2,
     c : 3
}

let {a,b} = obj  // Name must be same as the Key in the Object
console.log(p)
console.log(q)
