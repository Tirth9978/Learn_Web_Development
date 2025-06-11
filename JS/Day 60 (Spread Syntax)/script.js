function sum(a,b,c) {
     return a + b + c ;
}

let arr = [1,2,3]

console.log(sum(arr[0],arr[1],arr[2]))
console.log(sum(...arr))

let obj = {...arr}
console.log(obj)