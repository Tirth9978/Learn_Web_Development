const express = require("express");

const app = express();
const port = 3000;

app.use((req,res,next)=>{
     console.log("I will run First")
     next();
})

app.use((red,res,next)=>{
     console.log("I will run second")
     next();
})

app.get("/",(req,res)=>{
     res.send("I am Tirth Patel")
})

app.listen(port,()=>{
     console.log("I am Running :)")
})