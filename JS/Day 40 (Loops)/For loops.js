// Normal For loop as you did in the C++ or C 
for (let i =0;i<=10;i++){
     console.log(i)
}

// For in loop is used for Objects

let obj = {
     "Name" : "Tirth",
     "Age"  : 18,
     "height" : 6,
}

for (let key in obj) {
     console.log(key + " -> " , obj[key])
}
for (let key of "Tirth"){
     console.log(key)
}