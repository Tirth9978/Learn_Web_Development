let text = document.getElementById("text")
let bu = document.getElementById("bu")

bu.addEventListener("click",()=>{
     let action =  navigator.clipboard.writeText(text.textContent)
     action.then(()=>{
          bu.textContent = "copied!"

          setTimeout(() => {
               bu.textContent = "Copy"
          }, 3000);
     })
})