let arr = [1,2,3,4,5,6,7,8,9]

const geterThanfive = (e)=>{
     if (e > 5){
          return true
     }
     return false
}

arr = arr.filter(geterThanfive)
console.log(arr)