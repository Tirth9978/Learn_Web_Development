document.querySelector("button").addEventListener("click", () => {
     if (String(document.querySelector("input").value) == "") {
          alert("Wrong Input")
          return;
     }
     
     console.log("I am Tirth Patel")
     fetch("http://localhost:3000", {
          method: "POST",
          headers: {
               'Content-Type': 'application/json'
          },
          body: JSON.stringify({ Text: String(document.querySelector("input").value) })
     })
     .then(res => res.json())
     .then(data => {
          console.log(data)
     }).catch(err =>{
          alert("System is Down :( ")
     })
})