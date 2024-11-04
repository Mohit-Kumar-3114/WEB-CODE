const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mohit:LNOfIPta7WSxrNEE@cluster0.ievjznx.mongodb.net/class")
  .then(() => console.log("CONNECTION OPEN"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  username: String,
  age: Number
});

// Defines User model for interacting with bandes collection in MongoDB, based on structure defined by userSchema
const User = mongoose.model("bande", userSchema); // Mongoose will pluralize it to bandes




// CREATE 
User.create([
  { username: "mohit", age: 20 },
  { username: "rohit", age: 20 },
  { username: "sohit", age: 20 }
])
  .then((users) => {
    console.log("Users created:", users);
  })
// The User.create method returns a Mongoose Query object. So use .then to handle asynchronous nature of it.




// READ
User.findOne({username:"mohit"})
.then((result) => {  
  console.log(result);
})
// The User.find method returns a Mongoose Query object. So use .then to handle asynchronous nature of it.




// UPDATE
User.updateOne({ username: "mohit" }, { $set: { age: 21 } })
  .then((result) => {
    console.log("Update Result:", result);
})
// The User.updateOne method returns a Mongoose Query object. So use .then to handle asynchronous nature of it.




// DELETE
User.deleteMany({ })
  .then((result) => {
    console.log("Delete Result:", result);
})
// The User.deleteMany method returns a Mongoose Query object. So use .then to handle asynchronous nature of it.




