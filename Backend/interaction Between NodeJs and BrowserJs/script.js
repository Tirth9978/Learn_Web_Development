document.querySelector("button").addEventListener("click", () => {
     let text = String(document.querySelector("input").value)
     
     fetch("http://localhost:3000", {
          method: "POST",
          headers: {
               'Content-Type': 'application/json'
          },
          
          body : JSON.stringify({Text : text})
     })
     .then(res => res.json())
     .then (data => {
          console.log(data)
     })
})