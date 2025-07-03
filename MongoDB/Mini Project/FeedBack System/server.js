const express = require("express")
const Main = require("./modules/main.js")
const cors = require("cors")
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

app.post("/",(req,res)=>{
     Main.main(String(req.body.Name),String(req.body.Feedback))
     console.log ("Done :)")
})

app.listen(port,()=>{
     console.log("I am Running :)")
})