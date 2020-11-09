const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const unirest = require("unirest");
const authConfig = require("../config/auth");

const User = require("../models/User");
const Data = require("../models/Data");
const router = express.Router();

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

router.post("/register", async (req, res) => {
  const { email } = req.body;
  const { linkedinId } = req.body;

  console.log(linkedinId);

  try {
    if (await User.findOne({ email }))
      return res.status(400).send({ error: "User is already registered" });

    if (await Data.findOne({ linkedinId }))
      return res.status(400).send({ error: "linkedin is already registered" });

    const user = await User.create(req.body);
    await Data.create(req.body);

    return res.send({ token: generateToken({ id: user.id }) });
  } catch (err) {
    return res.status(400).send({ error: "Registration failed" });
  }
});

router.post("/authenticate", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) return res.status(400).send({ error: "User not found" });

  if (!(await bcrypt.compare(password, user.password)))
    return res.status(400).send({ error: "Invalid password" });

  user.password = undefined;

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
        return res.send({ token: generateToken({ id: user.id }) });
      }
    );
  });
});

module.exports = (app) => app.use("/auth", router);
