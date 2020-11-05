var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/data");

var userSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
  },
  { collection: "userCollection" }
);

module.exports = { Mongoose: mongoose, UserSchema: userSchema, target: "node" };
