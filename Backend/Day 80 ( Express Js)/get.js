const express = require("express")

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
     res.send("I am Noemal")
})


// Use as a gernal Form 
app.get("/:name",(req,res)=>{
     res.send(`I am ${req.params.name}`)
     
})


app.listen(port, () => {
     console.log('Server is running 🚀 on http://localhost:3000');
});