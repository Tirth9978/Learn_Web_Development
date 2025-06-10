let animal = {
     eat : true
}

let rabbit = {
     jumps : true
}

rabbit.__proto__ = animal

console.log(rabbit.eat)