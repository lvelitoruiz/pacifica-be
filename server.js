// imports
const express = require('express');
const cors = require("cors");
const cookieSession = require("cookie-session");
const bodyParser= require('body-parser');

const db = require('./models');

// app
const app = express();
app.use(cors({
  origin: 'https://pacifica-j4lw6kkih-lvelitoruiz.vercel.app',
  credentials: true,
}));
app.use(bodyParser.json());
app.use(
    cookieSession({
      name: "test-session",
      secret: "COOKIE_SECRET",
      httpOnly: true,
    })
);

/**
 * AUTH
*/
require('./routes/auth.routes')(app);

/**
 * BOOKS
*/
require('./routes/book.routes')(app);

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}.`);
});

