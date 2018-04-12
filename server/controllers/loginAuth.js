const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');

exports.login = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      console.log(existingUser.password);
      console.log(password);
      bcrypt.compare(password, existingUser.password, (error, isMatch) => {
        if (err) {
          res.send({ success: 'false' });
        }

        if (isMatch) {
          res.send({ success: 'true' });
        }
      });
    } else {
      res.send({ success: 'false' });
    }
  });
};
