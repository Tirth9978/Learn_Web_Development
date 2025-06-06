let p = document.querySelector("p")


let count =0;

// Update the position of the animation
function update(){

     p.style.left = count + "px"
     count += 2;

     // Check if your count is bigger then 
     if (count > window.innerWidth){
          count = -p.offsetWidth
     }
}

function animate(){
     // Update the Position of the animation
     update()
     // again the Request Call 
     requestAnimationFrame(animate)
}

// Starting point of the Animation
requestAnimationFrame(animate)