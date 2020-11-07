const express = require("express");
const unirest = require("unirest");
const authMiddleware = require("../middlewares/auth");

const User = require("../models/User");
const Data = require("../models/Data");
const router = express.Router();

router.use(authMiddleware);

router.get("/", async (req, res) => {
  const _id = req.userId;

  const user = await User.findOne({ _id });

  const linkedinId = user.linkedinId;

  const data = await Data.findOne({ linkedinId });
  console.log(data);

  res.send({
    firstName: data.firstName,
    lastName: data.lastName,
    birthDate: data.birthDate,
  });
});
// });

module.exports = (app) => app.use("/projects", router);
