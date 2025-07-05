const image = document.getElementById("imageInput")
const preview = document.getElementById("preview")


image.addEventListener("change",(event)=>{
     const file = event.target.files[0];

     if (file) {
          const reder = new FileReader()
          reder.onload = (e)=>{
               preview.src = e.target.result;
               preview.style.display = "block"
          }

          reder.readAsDataURL(file)
     }
})