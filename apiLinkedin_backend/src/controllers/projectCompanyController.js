const express = require("express");
const unirest = require("unirest");
const authMiddleware = require("../middlewares/auth");

const DataCompany = require("../models/dataCompany");
const router = express.Router();

router.use(authMiddleware);

router.get("/", async (req, res) => {
  const { linkedin } = req.body;
  try {
    if (await DataCompany.findOne({ linkedin }))
      return res.send({ data: await DataCompany.findOne({ linkedin }) });

    var reqApi = unirest(
      "POST",
      "https://company-profile-scraper-linkedin.p.rapidapi.com/scrape_company_linkedin"
    );

    reqApi.headers({
      "content-type": "application/json",
      "x-rapidapi-key": "66e68f050dmsh07ae5eb46115fd2p14b295jsn6042d8530440",
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
      if (await resApi.error) return res.send({ error: "Api Error" });

      if (!DataCompany.findOne({ linkedin }))
        await DataCompany.create({ linkedin });

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

      await DataCompany.findOneAndUpdate(
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
        { upsert: true }
      );

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
    });
  } catch (err) {
    return res.send({ error: "erro" });
  }
});

module.exports = (app) => app.use("/company", router);
