// This is the best usecase of the finally in the JS 

function a(x){
     try {
          return x * 2
     }catch(error) {
          console.log("Error Is Here")
     }
     finally {
          console.log("But I will run , whenever return called before me")
          return x
     }
}

console.log(a(2))