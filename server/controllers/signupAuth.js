const User = require('../models/user');

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const regno = req.body.regno;
  const points = req.body.points;

  console.log(email);
  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }
    if (!email || !password || !name || !regno) {
      console.log('hello');
      return res.send({
        success: 'false',
        error: 'please provide all the details',
      });
    }

    if (existingUser) {
      console.log(existingUser.password);
      return res.send({ success: 'false' }).status(422);
    }

    const user = new User({
      email,
      password,
      name,
      regno,
      points,
    });

    user.save((error) => {
      if (error) {
        return next(error);
      }
      res.send({ success: 'true' });
    });
  });
};
