const mongoose = require("../database");

const DataSchema = new mongoose.Schema({
  linkedinId: { type: String, required: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  birthDate: { type: String, required: false },
  profilePicture: { type: String, required: false },
  summary: { type: String, required: false },
  location: { type: Object, required: false },
  premium: { type: Boolean, required: false },
  influencer: { type: Boolean, required: false },
  treasuryMedia: { type: Array, required: false },
  languages: { type: Object, required: false },
  industry: { type: String, required: true },
  education: { type: Array, required: false },
  patents: { type: Array, required: false },
  certifications: { type: Array, required: false },
  projects: { type: Array, required: false },
  publications: { type: Array, required: false },
  courses: { type: Array, required: false },
  testScores: { type: Array, required: false },
  positionGroups: { type: Array, required: false },
  volunteerExperiences: { type: Array, required: false },
  skills: { type: Array, required: false },
});

DataSchema.pre("save", async function (next) {
  next();
});

const User = mongoose.model("Data", DataSchema);

module.exports = User;
