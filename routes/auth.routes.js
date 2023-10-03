const { authJwt } = require('../middleware');
const controller = require('../controllers/auth.controller');

module.exports = function (app) {

  app.use(function (req, res, next) {

    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Origin", "https://pacifica-lvelitoruiz.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

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