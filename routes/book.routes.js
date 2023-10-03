const { authJwt } = require('../middleware');
const controller = require('../controllers/book.controller');

module.exports = function(app) {
  
  app.use(function(req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept",
        "Access-Control-Allow-Origin"
    );

    next();
  });

  app.get(
    "/api/book",
    [authJwt.verifyToken],
    controller.getBooks
  );

  app.post(
    "/api/book",
    [authJwt.verifyToken],
    controller.createBook
  );

  app.put(
    "/api/book",
    [authJwt.verifyToken],
    controller.updateBook
  );

  app.delete(
    "/api/book",
    [authJwt.verifyToken],
    controller.deleteBook
  );

}