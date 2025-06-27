const express = require("express")

const app = express();
const port = 3000;

app.get("/menu",(req,res)=>{
     res.send("Give me Menu")
})

app.post("/order",(req,res)=>{
     res.send("Take my Order")
})

app.put("/change",(req,res)=>{
     res.send("Chnage the Order")
})

app.delete("/delete",(req,res)    =>{

     res.send("Just Delete the Order")
})

app.listen(port,()=>{
     console.log("I am Running")
})