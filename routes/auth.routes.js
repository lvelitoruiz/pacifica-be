const { authJwt } = require('../middleware');
const controller = require('../controllers/auth.controller');

module.exports = function (app) {

  app.use(function (req, res, next) {

    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept",
      "Access-Control-Allow-Origin"
    );

    next();
  });

  app.post('/api/auth/signin', controller.signin);

  app.post('/api/auth/signout', controller.signout);

  app.post(
    '/api/auth/signup',
    [authJwt.verifyToken],
    controller.signup
  );
};