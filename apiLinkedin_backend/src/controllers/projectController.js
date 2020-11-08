const express = require("express");
const unirest = require("unirest");
const authMiddleware = require("../middlewares/auth");

const User = require("../models/User");
const Data = require("../models/Data");
const router = express.Router();

router.use(authMiddleware);

async function getData(_id) {
  const user = await User.findOne({ _id });
  const linkedinId = user.linkedinId;
  return await Data.findOne({ linkedinId });
}

router.get("/profile", async (req, res) => {
  const data = await getData(req.userId);

  res.send({
    firstName: data.firstName,
    lastName: data.lastName,
    birthDate: data.birthDate,
    profilePicture: data.profilePicture,
    summary: data.summary,
    premium: data.premium,
    influencer: data.influencer,
    industry: data.industry,
  });
});

router.get("/location", async (req, res) => {
  const data = await getData(req.userId);

  res.send({
    location: data.location,
  });
});

router.get("/treasuryMedia", async (req, res) => {
  const data = await getData(req.userId);

  res.send({
    treasuryMedia: data.treasuryMedia,
  });
});

router.get("/languages", async (req, res) => {
  const data = await getData(req.userId);

  res.send({
    languages: data.languages,
  });
});

router.get("/education", async (req, res) => {
  const data = await getData(req.userId);

  res.send({
    education: data.education,
  });
});

router.get("/patents", async (req, res) => {
  const data = await getData(req.userId);

  res.send({
    patents: data.patents,
  });
});

router.get("/certifications", async (req, res) => {
  const data = await getData(req.userId);

  res.send({
    certifications: data.certifications,
  });
});

router.get("/projects", async (req, res) => {
  const data = await getData(req.userId);

  res.send({
    projects: data.projects,
  });
});

router.get("/publications", async (req, res) => {
  const data = await getData(req.userId);

  res.send({
    publications: data.publications,
  });
});

router.get("/courses", async (req, res) => {
  const data = await getData(req.userId);

  res.send({
    courses: data.courses,
  });
});

router.get("/testScores", async (req, res) => {
  const data = await getData(req.userId);

  res.send({
    testScores: data.testScores,
  });
});

router.get("/positionGroups", async (req, res) => {
  const data = await getData(req.userId);

  res.send({
    positionGroups: data.positionGroups,
  });
});

router.get("/volunteerExperiences", async (req, res) => {
  const data = await getData(req.userId);

  res.send({
    volunteerExperiences: data.volunteerExperiences,
  });
});

router.get("/skills", async (req, res) => {
  const data = await getData(req.userId);

  res.send({
    skills: data.skills,
  });
});

module.exports = (app) => app.use("/personal", router);
