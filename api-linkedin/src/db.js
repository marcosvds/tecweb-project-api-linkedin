var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/data");

var userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
  },
  { collection: "userCollection" }
);

module.exports = { Mongoose: mongoose, UserSchema: userSchema };
