let a = [1,2,3,4,5,6,7]

const sum = (a , b) => {
     return a + b
}

const pro = (a,b) => {
     return a * b
}

console.log(a.reduce(sum))

console.log(a.reduce(pro))