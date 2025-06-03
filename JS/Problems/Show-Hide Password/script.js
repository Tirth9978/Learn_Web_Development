let bu = document.querySelector("button")

bu.addEventListener("click",()=>{
     let input = document.querySelector("input")
     if (input.type == "password"){
          input.setAttribute("type","text")
     }else {
          input.setAttribute("type","password")
     }
     
})