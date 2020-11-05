var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/linkedinApi");

var userSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    idLinkedin: String,
  },
  { collection: "register" }
);

module.exports = { Mongoose: mongoose, UserSchema: userSchema };
