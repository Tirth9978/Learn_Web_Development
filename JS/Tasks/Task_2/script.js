let arr = ["red" , "green" , "blue" ,"yellow" , "black"]
let ref = arr 
console.log(Math.floor((100*Math.random())%5))

let path = document.getElementsByClassName("box")
console.log(path)

for (let i =0;i<path.length;i++){
     let random = Math.floor((Math.random()*100) % arr.length)
     path[i].style.background = arr[random]
     arr.splice(random,1)
}