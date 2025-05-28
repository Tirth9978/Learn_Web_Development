let a = [1,2,3,4,5,6,7]


// Normal for loop
for (let i=0;i<a.length;i++){
     console.log(a[i])
}

// For each

a.forEach((value,index,arr)=>{
     console.log(`${value} ${index} =>  ${arr}`)
})

// For in
for(let i in a){
     console.log(a[i])
}
console.log("\n")

// For of
for (let value of a) {
     console.log(value)
}console.log("\n")

// map

let newArr = a.map((e)=>{
     return e ** 2;
})
console.log(newArr)


