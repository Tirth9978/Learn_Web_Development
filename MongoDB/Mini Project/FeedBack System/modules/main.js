const mongoose = require("mongoose");

const userInfo = new mongoose.Schema({
     userName: String,
     feedBack: String
});

const User = mongoose.model("User", userInfo);

const main = async (name, FeedBack) => {
     try {
          await mongoose.connect("mongodb://localhost:27017/Info1");
          console.log("MongoDB Connected");

          const user = new User({
               userName: name,
               feedBack: FeedBack
          });

          await user.save(); // ✅ Wait until the data is saved
          console.log("User saved successfully!");
     } catch (err) {
          console.log("Error:", err);
     } finally {
          await mongoose.disconnect(); // ✅ Wait for disconnect to complete
          console.log("MongoDB Disconnected");
     }
};

module.exports = { main };
