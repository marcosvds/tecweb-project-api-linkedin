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

  try {
    if (await User.findOne({ email }))
      return res.status(400).send({ error: "User is already registered" });

    const user = await User.create(req.body);
    const data = await Data.create({ linkedinId });

    user.password = undefined;

    return res.send({ user, data, token: generateToken({ id: user.id }) });
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

    await Data.updateMany({
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
    });

    res.send({
      token: generateToken({ id: user.id }),
    });
  });
});

module.exports = (app) => app.use("/auth", router);
