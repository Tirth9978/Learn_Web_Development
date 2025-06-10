class admin {
     constructor(){
          console.log("I am Admin")
     }
     location(){
          return "Admin Office";
     }
}

class student extends admin {
     constructor(name,id,std){
          super();
          this.name = name ;
          this.id = id ;
          this.std = std ;
     }

     getInfo(){
          console.log(`Name : ${this.name}`)
          console.log(`ID : ${this.id}`)
          console.log(`STD : ${this.std}`)
     }

     location(){
          return "ClassRoom";
     }
}

let Admin = new admin;


let tirth = new student("Tirth",12,12)
tirth.getInfo()

console.log("Admin Location : "+ Admin.location())
console.log(`Stucent Location : ${tirth.location() }`)

console.log(tirth instanceof student)
console.log(tirth instanceof admin )

console.log(Admin instanceof student)
