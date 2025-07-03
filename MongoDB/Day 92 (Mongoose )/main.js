const mongooes = require("mongoose")

mongooes.connect("mongodb://localhost:27017/Info")
     .then(() => {
          console.log("Yse Connect")
     })
     .catch(err => {
          console.log("I cannot :(( ")
          console.log(err)
     })

// Making the Schema 
const userSchema = new mongooes.Schema({
     name: String,
     age: Number,
     email: {
          type: String,
          required: true,
          unique: true
     },
     createdAt: {
          type: Date,
          default: Date.now
     }
});

// Creating a Model
const User = mongooes.model("User", userSchema)

//Creating and Saving a Document

const user = new User(
     {
          name: "Tirth",
          age: 20,
          email: "tirth@example.com"
     }
)

user.save()
.then(result => {
     console.log("Saved : ", result)
})
.catch(err => {
     console.log("Error : " ,err)
})