function getData(){
     return new Promise((resolve,reject)=>{
          setTimeout(() => {
               console.log("Data is ready :)")
               resolve();
          }, 3000);
     })
}

let data = getData();
data.then(()=>{
     console.log("Done, Now Data is in the prosess")
})

