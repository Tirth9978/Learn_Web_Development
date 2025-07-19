const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const User = require("./models/User.js")

const app = express();
const port = 3000;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("Tirth")
// Connetion to the MongoDB using Mongoose
mongoose.connect("mongodb://localhost:27017/User-Info")
console.log("Tom")
// Sign Up
app.post("/signup" , async (req,res)=> {


     const name = req.body.name ; 
     const email = req.body.email;
     const password = req.body.password;

     const user = new User({name , email , password})
     await user.save();

     res.json({Message : "Done"})
})

// Login , 
app.post("/login" , async (req,res) => {
     const {email , password} = req.body;

     const user = await User.findOne({email,password})

     if (user){
          res.json({Message : "Ok"})
     }else {
          res.json({Message : "User Not Found :("})
     }
})

app.listen(port , ()=> {
     console.log("I am Running :)")
})