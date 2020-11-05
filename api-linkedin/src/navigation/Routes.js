import React from 'react';

// export default function Routes() {
//   return <h1>oi</h1>;
// }

var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
  var db = require('../db');
  var userName = req.body.username;
  var userEmail = req.body.useremail;
  var Users = db.Mongoose.model(
    'usercollection',
    db.UserSchema,
    'usercollection'
  );
  var user = new Users({ username: userName, email: userEmail });
  user.save(function (err) {
    if (err) {
      console.log('Error! ' + err.message);
      return err;
    } else {
      console.log('Post saved');
      res.redirect('userlist');
    }
  });
});
