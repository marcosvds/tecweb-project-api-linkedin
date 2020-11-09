const mongoose = require("../database");

const DataCompanySchema = new mongoose.Schema({
  linkedin: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: Date.now },
  address: { type: String, required: false },
  companyName: { type: String, required: false },
  companySize: { type: String, required: false },
  description: { type: String, required: false },
  employeesOnLinkedin: { type: String, required: false },
  followers: { type: String, required: false },
  founded: { type: String, required: false },
  headquarters: { type: String, required: false },
  industry: { type: String, required: false },
  phone: { type: String, required: false },
  tagline: { type: String, required: false },
});

DataCompanySchema.pre("save", async function (next) {
  next();
});

const DataCompany = mongoose.model("DataCompany", DataCompanySchema);

module.exports = DataCompany;
