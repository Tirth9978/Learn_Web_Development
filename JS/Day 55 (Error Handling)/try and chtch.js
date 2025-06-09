try {
     console.log(x * 2)
}catch(error){
     console.log("Error occur :(")

     
     console.log(error.name)  // It will give you the Error Name 
     console.log(error.message)  // It will give you the Error Message
     console.log(error.stack)   // It will give you the Error Stack
     
}