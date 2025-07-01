use("Tirth1")

// Create
db.createCollection("Info")

// Insertion
db.Info.insertOne({
     Name: "Tirth",
     Age: 18
})

db.Info.insertMany(
     [
          { Name: "Tirth", "Age": 18 },
          { Name: "Aryan", "Age": 19 },
          { Name: "Priya", "Age": 20 },
          { Name: "Riya", "Age": 21 },
          { Name: "Soham", "Age": 22 },
          { Name: "Neha", "Age": 23 },
          { Name: "Kabir", "Age": 18 },
          { Name: "Anjali", "Age": 19 },
          { Name: "Rahul", "Age": 20 },
          { Name: "Sneha", "Age": 21 }
     ]

)

// Read
let a = db.Info.find({Name : "Tirth"})
console.log(a)

console.log(a.toArray())
console.log(a.count())

// Update 

db.Info.updateOne({"Age":18} , {$set : {Age : 190}})
db.Info.updateMany({"Age" : 19}, {$set:{Age : 1000}})

// Delete 

db.Info.deleteOne({"Name" : "Tirth"})
db.Info.deleteMany({"Name" : "Tirth"})