const express = require("express")

const app = express();

app.get("/Tirth",(req,res)=>{
     let userName = "Tirth"
     let email = "abc123@i-main.com"
     res.render("index.ejs", {userName : userName , userEmail : email})
})

app.listen(3000,()=>{
     console.log("I am Running :))")
})