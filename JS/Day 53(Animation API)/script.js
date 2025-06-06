const square = document.querySelector("#square")

const animation = square.animate(
     [{transform : 'translateX(0px)'},{transform : 'translateX(100px)'}],
     {
          duration : 2000,
          iterations : Infinity,
          direction : 'alternate'
          // easing : "ease"
     }
)

document.querySelector("#play").addEventListener("click",()=>{
     animation.play()
})

document.querySelector("#pause").addEventListener("click",()=>{
     animation.pause()
})