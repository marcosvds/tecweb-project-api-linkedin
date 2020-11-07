var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Linkedin-Api by Insper" });
});

/* GET Userlist page. */
router.get("/user", function (req, res) {
  var db = require("../db");
  var userEmail = req.body.email;
  var userPassword = req.body.password;
  var Users = db.Mongoose.model("register", db.UserSchema, "register");
  Users.find({ email: userEmail, password: userPassword })
    .lean()
    .exec(function (e, docs) {
      if (docs) {
        res.render("userlist", { userlist: docs });
        res.json(docs);
        //res.status("200").json(docs);
      } else {
        res.redirect("/");
      }
    });
});

/* GET New User page. */
router.get("/newuser", function (req, res) {
  res.render("newuser", { title: "Add New User" });
});

/* POST to Add User Service */
router.post("/adduser", function (req, res) {
  var db = require("../db");
  var userEmail = req.body.email;
  var userPassword = req.body.password;
  var userIdLinkedin = req.body.idLinkedin;
  var Users = db.Mongoose.model("register", db.UserSchema, "register");
  console.log(userEmail, userPassword, userIdLinkedin);
  var user = new Users({
    email: userEmail,
    password: userPassword,
    idLinkedin: userIdLinkedin,
  });
  user.save(function (err) {
    if (err) {
      console.log("Error! " + err.message);
      return err;
    } else {
      console.log("Post saved");
      res.redirect("/");
    }
  });
});

module.exports = router;
