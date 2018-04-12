const SignupAuth = require('./controllers/signupAuth');
const PointsChanged = require('./controllers/pointsChange');
const LoginAuth = require('./controllers/loginAuth');

module.exports = (app) => {
  app.post('/login', LoginAuth.login);
  app.post('/signup', SignupAuth.signup);
  app.post('/points', PointsChanged.points);
};
