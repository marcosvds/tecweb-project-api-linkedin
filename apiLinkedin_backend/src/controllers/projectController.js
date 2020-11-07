const express = require("express");
const unirest = require("unirest");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.use(authMiddleware);

router.get("/", (req, res) => {

  var reqUni = unirest(
    "GET",
    "https://linkedin-public-profiles.p.rapidapi.com/rapidapi/"
  );

  reqUni.query({
    profileId: "williamhgates",
  });

  reqUni.headers({
    "x-rapidapi-host": "linkedin-public-profiles.p.rapidapi.com",
    "x-rapidapi-key": "8085288af8msh2c14499e1cabd8ep1157f6jsn9d120e529dc6",
    useQueryString: true,
  });

  reqUni.end(function (resUni) {
    if (resUni.error) res.status(400).send({ error: "Linkedin Api Error" });

    res.send({ data: resUni.body, user: req.userId });
  });
});

module.exports = (app) => app.use("/projects", router);
