const fs = require("fs");
const csv = require("csv-parser");

const results = [];

fs.createReadStream("data.csv")
     .pipe(csv())
     .on("data", (data) => results.push(data))
     .on("end", () => {
          console.log(results);
     });


const { createObjectCsvWriter } = require("csv-writer");

const csvWriter = createObjectCsvWriter({
     path: "data.csv",
     header: [
          { id: "id", title: "id" },
          { id: "name", title: "name" },
          { id: "age", title: "age" }
     ]
});

const data = [
     { id: 1, name: "Tirth", age: 20 },
     { id: 2, name: "Rahul", age: 21 }
];

csvWriter.writeRecords(data)
     .then(() => console.log("CSV written successfully"));



const csvAppend = createObjectCsvWriter({
     path: "data.csv",
     header: [
          { id: "id", title: "id" },
          { id: "name", title: "name" },
          { id: "age", title: "age" }
     ],
     append: true   // 🔥 KEY POINT
});

const newData = [
     { id: 3, name: "Amit", age: 22 }
];

csvAppend.writeRecords(newData)
     .then(() => console.log("Data appended"));
