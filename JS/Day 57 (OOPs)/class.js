class student {
     constructor(name,std,roll) {
          console.log("I will be call first:)")
          this.name = name;
          this.std  = std ;
          this.roll = roll;
     }

     getInfo(){
          console.log("This is the Information")
          console.log(`Name : ${this.name}`) 
          console.log(`STD : ${this.stdtd}`)
          console.log(`Roll : ${this.roll}`)
     }
}


// creation of an object
let a = new student("Tirth",12,32);
a.getInfo()