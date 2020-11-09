const express = require("express");
const unirest = require("unirest");
const authMiddleware = require("../middlewares/auth");

const DataCompany = require("../models/dataCompany");
const router = express.Router();

router.use(authMiddleware);

router.get("/", async (req, res) => {
  const { linkedin } = req.body;
  console.log(linkedin);

  try {
    if (await DataCompany.findOne({ linkedin }))
      res.send({ data: await DataCompany.findOne({ linkedin }) });

    var reqApi = unirest(
      "POST",
      "https://company-profile-scraper-linkedin.p.rapidapi.com/scrape_company_linkedin"
    );

    reqApi.headers({
      "content-type": "application/json",
      "x-rapidapi-key": "8085288af8msh2c14499e1cabd8ep1157f6jsn9d120e529dc6",
      "x-rapidapi-host": "company-profile-scraper-linkedin.p.rapidapi.com",
      useQueryString: true,
    });

    reqApi.type("json");
    reqApi.send({
      cookie:
        "AQEDAS3-7e0A0iCuAAABdasg8UAAAAF1zy11QFYAGeLuSURU5Cbk40jaF2PESNW9nzP70ALYStuXXo1M8m18O08HIvzGo7uo6vejE7EMlB_0owfn0HLC1ENXEk3v76Xg70e44xa6ecJh_7fm6lMAWUGx",
      handle: linkedin,
    });

    reqApi.end(async function (resApi) {
      if (await resApi.error) resApi.status(401).send({ error: "Api Error" });

      if (await !DataCompany.findOne({ linkedin }))
        await DataCompany.create({ linkedin });
      console.log(resApi.body.company_linkedin);

      try {
        address =
          resApi.body.company_linkedin.address == ""
            ? resApi.body.company_linkedin.tipo
            : resApi.body.company_linkedin.address;
      } catch {}

      try {
        companySize =
          resApi.body.company_linkedin.companysize === ""
            ? resApi.body.company_linkedin.tamanhodaempresa
            : resApi.body.company_linkedin.companysize;
      } catch {}

      const { companyName } = resApi.body.company_linkedin.company_name;
      const { description } = resApi.body.company_linkedin.description;

      try {
        if (resApi.body.company_linkedin.employees_on_linkedin === "") {
          const { employeesOnLinkedin } = resApi.body.company_linkedin.sede;
        } else {
          const {
            employeesOnLinkedin,
          } = resApi.body.company_linkedin.employees_on_linkedin;
        }
      } catch {}

      const { followers } = resApi.body.company_linkedin.follower;

      try {
        if (resApi.body.company_linkedin.founded === "") {
          const { founded } = resApi.body.company_linkedin.especializações;
        } else {
          const { founded } = resApi.body.company_linkedin.founded;
        }
      } catch {}

      try {
        if (resApi.body.company_linkedin.headquarters === "") {
          const { headquarters } = resApi.body.company_linkedin.tipo;
        } else {
          const { headquarters } = resApi.body.company_linkedin.headquarters;
        }
      } catch {}

      try {
        if (resApi.body.company_linkedin.industry === "") {
          const { industry } = resApi.body.company_linkedin.setor;
        } else {
          const { industry } = resApi.body.company_linkedin.industry;
        }
      } catch {}

      try {
        if (resApi.body.company_linkedin.phone === "") {
          const { phone } = resApi.body.company_linkedin.númerodetelefone;
        } else {
          const { phone } = resApi.body.company_linkedin.phone;
        }
      } catch {}

      try {
        const { tagline } = resApi.body.company_linkedin.númerodetelefone;
      } catch {}

      await DataCompany.updateMany({
        address,
        companySize,
        companyName,
        description,
        employeesOnLinkedin,
        followers,
        founded,
        headquarters,
        industry,
        phone,
        tagline,
      });

      res.send({
        data: resApi.body.company_linkedin,
      });
    });
  } catch (err) {
    return res.send({ error: err });
  }
});

module.exports = (app) => app.use("/company", router);
