const canvas = document.getElementById("my-canvas")

const ctx = canvas.getContext('2d')
console.log(ctx)
ctx.fillRect(1,1,150,100)

const ctx1 = document.getElementById("my-text").getContext("2d")
ctx1.fillText("I am Tirth Patel",1,20)