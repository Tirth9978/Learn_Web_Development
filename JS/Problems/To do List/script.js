let bu = document.querySelector("button")

bu.addEventListener("click",()=>{
     let Text_content = document.getElementById("InInput").value.trim()
     if (Text_content == ""){
          alert("Please enter the task....")
          return    
     }
     document.getElementById("InInput").value = "";
     
     let newDiv = document.createElement("div")
     document.querySelector(".main").append(newDiv)

     let li = document.createElement("li")
     newDiv.append(li)

     let span = document.createElement("span")
     li.append(span)

     span.setAttribute("class" , "Normal")
     span.innerHTML = Text_content

     let button = document.createElement("button")
     button.textContent = "Mark as done"
     button.setAttribute("class","Done")
     button.setAttribute("onclick","fun()")
     button.setAttribute("style","margin-left:12px;")

     button.addEventListener("click",()=>{
          button.classList.toggle("Done")
          if (!button.classList.contains("Done")){
               button.textContent = "Undo"
               span.classList.add("undo")
          }
          else {
               button.textContent = "Mark as done"
               span.classList.remove("undo")
          }
     })
     li.append(button)
})