let prom1 = new Promise((resolve, reject) => {
     let random = Math.random();

     if (random < 0.5) {
          console.log("Your request has been Rejected :(");
          reject("Your request has been Rejected :(")
     }
     else {
          setTimeout(() => {
               console.log("I am Tirth Patel");
               resolve("Ok Done for Tirth")
          }, 4000);
     }
})

let prom2 = new Promise((resolve, reject) => {
     let random = Math.random();

     if (random < 0.5) {
          console.log("Your request has been Rejected Second Time:(");
          reject("Your request has been Rejected :( ")
     }
     else {
          setTimeout(() => {
               console.log("I am Tom");
               resolve("Ok Done for Tom")
          }, 4000);
     }
})

prom1.then((a) => {
     alert(`This is the ${a}`)
}).then((a)=>{
     console.log("Thank You Tirth Patel")
     let p = document.createElement("p")
     p.innerHTML = "Your Work is done :)";
     document.body.append(p)
}).catch((error)=>{
     console.log(error)
     let p = document.createElement("p")
     p.innerHTML = "Your Work will not done :(";
     document.body.append(p)
})

let p = Promise.all([prom1,prom2])
p.then((e)=>{
     console.log(e)
}).catch((err)=>{
     console.log(err)
})

let p1 = Promise.allSettled([prom1,prom2])
p1.then((e)=>{
     console.log(e)
}).catch((err)=>{
     console.log(err)
})


let p2 = Promise.race([prom1,prom2])
p1.then((e)=>{
     console.log(e)
}).catch((err)=>{
     console.log(err)
})