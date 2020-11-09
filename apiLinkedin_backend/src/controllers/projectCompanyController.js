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
      console.log(resApi.body);
      if (await resApi.error) res.send({ error: "Api Error" });

      if (!DataCompany.findOne({ linkedin }))
        await DataCompany.create({ linkedin });
      console.log(resApi.body.company_linkedin);

      try {
        address =
          resApi.body.company_linkedin.address === ""
            ? resApi.body.company_linkedin.tipo
            : resApi.body.company_linkedin.address;
      } catch {}

      try {
        companySize =
          resApi.body.company_linkedin.companysize === ""
            ? resApi.body.company_linkedin.tamanhodaempresa
            : resApi.body.company_linkedin.companysize;
      } catch {}

      companyName = resApi.body.company_linkedin.company_name;
      description = resApi.body.company_linkedin.description;

      try {
        employeesOnLinkedin =
          resApi.body.company_linkedin.employees_on_linkedin === ""
            ? resApi.body.company_linkedin.sede
            : resApi.body.company_linkedin.employees_on_linkedin;
      } catch {}

      followers = resApi.body.company_linkedin.follower;

      try {
        founded =
          resApi.body.company_linkedin.founded === ""
            ? resApi.body.company_linkedin.especializações
            : resApi.body.company_linkedin.founded;
      } catch {}

      try {
        headquarters =
          resApi.body.company_linkedin.headquarters === ""
            ? resApi.body.company_linkedin.tipo
            : resApi.body.company_linkedin.headquarters;
      } catch {}

      try {
        industry =
          resApi.body.company_linkedin.industry === ""
            ? resApi.body.company_linkedin.setor
            : resApi.body.company_linkedin.industry;
      } catch {}

      try {
        phone =
          resApi.body.company_linkedin.phone === ""
            ? resApi.body.company_linkedin.númerodetelefone
            : resApi.body.company_linkedin.phone;
      } catch {}

      try {
        tagline = resApi.body.company_linkedin.númerodetelefone;
      } catch {}

      DataCompany.findOneAndUpdate(
        { linkedin },
        {
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
        },
        { upsert: true },
        function (err, doc) {
          if (err) return res.send(500, { error: "api error" });
          return res.send({
            linkedin,
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
        }
      );

      res.send({
        data: resApi.body.company_linkedin,
      });
    });
  } catch (err) {
    return res.send({ error: err });
  }
});

module.exports = (app) => app.use("/company", router);
