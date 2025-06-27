const express = require("express")
const cors = require("cors")

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

app.post("/",(req,res)=>{
     let {Text} = req.body
     console.log(Text)
})
app.get("/",(req,res)=>{
     console.log("Text")
})

app.listen(port,()=>{
     console.log("I am Running :)")
})