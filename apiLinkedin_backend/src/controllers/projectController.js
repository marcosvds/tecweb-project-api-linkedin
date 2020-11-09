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

router.post("/refresh", async (req, res) => {
  const _id = req.userId;
  const user = await User.findOne({ _id });

  var reqUni = unirest(
    "GET",
    "https://linkedin-public-profiles.p.rapidapi.com/rapidapi/"
  );

  reqUni.query({
    profileId: user.linkedinId,
  });

  reqUni.headers({
    "x-rapidapi-host": "linkedin-public-profiles.p.rapidapi.com",
    "x-rapidapi-key": "8085288af8msh2c14499e1cabd8ep1157f6jsn9d120e529dc6",
    useQueryString: true,
  });

  reqUni.end(async (resUni) => {
    if (resUni.error) res.status(400).send({ error: "Linkedin Api Error" });

    const firstName = resUni.body.data.data.first_name;
    const lastName = resUni.body.data.data.last_name;
    const birthDate = resUni.body.data.data.birth_date;
    const profilePicture = resUni.body.data.data.profile_picture;
    const summary = resUni.body.data.data.summary;
    const location = resUni.body.data.data.location;
    const premium = resUni.body.data.data.premium;
    const influencer = resUni.body.data.data.influencer;
    const treasuryMedia = resUni.body.data.data.treasury_media;
    const languages = resUni.body.data.data.languages;
    const industry = resUni.body.data.data.industry;
    const education = resUni.body.data.data.education;
    const patents = resUni.body.data.data.patents;
    const certifications = resUni.body.data.data.certifications;
    const projects = resUni.body.data.data.projects;
    const publications = resUni.body.data.data.publications;
    const courses = resUni.body.data.data.courses;
    const testScores = resUni.body.data.data.test_scores;
    const positionGroups = resUni.body.data.data.position_groups;
    const volunteerExperiences = resUni.body.data.data.volunteer_experiences;
    const skills = resUni.body.data.data.skills;

    const linkedinId = user.linkedinId;
    console.log(linkedinId);
    Data.findOneAndUpdate(
      { linkedinId },
      {
        firstName,
        lastName,
        birthDate,
        profilePicture,
        summary,
        location,
        premium,
        influencer,
        treasuryMedia,
        languages,
        industry,
        education,
        patents,
        certifications,
        projects,
        publications,
        courses,
        testScores,
        positionGroups,
        volunteerExperiences,
        skills,
      },
      { upsert: true },
      function (err, doc) {
        if (err) return res.send(500, { error: err });
        return res.send("Succesfully refreshed");
      }
    );
  });
});

module.exports = (app) => app.use("/personal", router);
