const express = require("express")

const app = express();
const port = 3000

app.get("/",(req,res)=>{
     res.send("I am Tirth Patel")
})

app.listen(port , ()=>{
     console.log(`App is running on the localHost:${port}`)
})