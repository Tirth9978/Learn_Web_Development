document.querySelector("button").addEventListener("click", () => {
     let name = String(document.querySelector("input").value)
     let feedBack = String(document.querySelector(".a").value)

     fetch("http://localhost:3000", {
          method: "POST",
          headers: {
               'Content-Type': 'application/json'
          },
          body : JSON.stringify({
               Name : name,
               Feedback : feedBack
          })
     })
     .then(res => res.json())
     .then(data => {
          console.log(data)
     })
     .catch(err => {
          console.log(err)
     })
})