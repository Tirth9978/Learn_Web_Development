const express = require("express")

const app = express();
const port = 3000;

app.get("/search",(req,res)=>{
     res.send(`Queres are ${req.query.q} and ${req.query.page}`)
})

app.listen(port,()=>{
     console.log("I am Running :)")
})