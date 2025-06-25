const express = require("express");

const app = express();
const port = 3000

app.use(express.static("Public"))

app.listen(port,()=>{
     
     console.log("I am Running")
})