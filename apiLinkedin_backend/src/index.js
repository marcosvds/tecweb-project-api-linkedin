const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("ok");
});

require("./controllers/authController")(app);
require("./controllers/projectController")(app);
require("./controllers/projectCompanyController")(app);

app.listen(3000);
