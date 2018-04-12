const User = require('../models/user');

exports.points = function (req, res, next) {
  const points = req.body.points;
  const email = req.body.email;
  console.log(points);
  console.log(email);
  User.update({ email }, { points }, (err) => {
    if (err) {
      return res.send({ success: 'false' });
    }
    return res.send({ success: 'true' });
  });
};
