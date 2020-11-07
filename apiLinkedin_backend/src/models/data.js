const mongoose = require("../database");

const DataSchema = new mongoose.Schema({
  linkedinId:{ type: String, required: true},
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  birthDate: { type: String, required: false },
  profilePicture: { type: String, required: false },
  summary: { type: String, required: false },
  locationCountry: { type: String, required: false },
});

DataSchema.pre("save", async function (next) {
  next();
});

const User = mongoose.model("Data", DataSchema);

module.exports = User;
