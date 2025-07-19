const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
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
app.post("/signup", async (req, res) => {

     try {

          const name = req.body.name;
          const email = req.body.email;
          const password = req.body.password;

          const checkUser = await User.findOne({ email })
          if (checkUser) {
               return res.json({ Message: "User already exists!" })
          }

          const hasedPassword = await bcrypt.hash(password, 10)

          const user = new User({ name, email, password: hasedPassword })
          await user.save();

          res.json({ Message: "Done" })
     }
     catch (err) {
          console.log(err);
          res.status(500).json({ Message: "Server Error" });
     }
})

// Login , 
app.post("/login", async (req, res) => {
     try {
          const { email, password } = req.body;

          const user = await User.findOne({ email })

          if (!user) {
               return res.json({ Message: "User Not Found :(" })
          }

          const isMatch = await bcrypt.compare(password, user.password)

          if (isMatch) {
               res.json({ Message: "Ok" })
          }
          else {
               res.json({ Message: "Wrong Password" })
          }
     }
     catch (err) {
          console.log(err);
          res.status(500).json({ Message: "Server Error" });
     }
})

app.listen(port, () => {
     console.log("I am Running :)")
})