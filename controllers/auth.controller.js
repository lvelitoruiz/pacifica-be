const db = require('../models');
const config = require('../config/auth.config');

const jwt = require("jsonwebtoken");

exports.signin = async (req, res) => {

  try {
    const user = db.get('users').find({ email: req.body.email, password: req.body.password }).value();

    if (!user) {
      return res.status(404).send({ message: 'Error in login...' });
    }

    const token = jwt.sign(
      {
        id: user.id
      },
      config.secret,
      {
        algorithm: 'HS256',
        allowInsecureKeySizes: true,
        expiresIn: 86400, // 24 hours
      }
    );

    // store token
    req.session.token = token;
    res.setHeader('Access-Control-Allow-Origin', 'https://pacifica-lvelitoruiz.vercel.app');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    return res
      .status(200)
      .send(
        {
          token: token,
          username: user.email,
          displayname: user.name,
          initials: user.initials,
        }
      );
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.signout = async (req, res) => {
  try {
    req.session = null;

    return res.status(200).send({ message: "Signed out..." });
  } catch (err) {
    this.next(err);
  }
};


exports.signup = async (req, res) => {
  let user = req.body;

  if (user) {

    const entity = db.get('users').takeRight(1).value()[0];
    const id = ((entity) ? (entity.id + 1) : 0);

    user = {
      ...user,
      id: id
    };

    db.get('users').push(user).write();

    res.setHeader('Access-Control-Allow-Origin', 'https://pacifica-lvelitoruiz.vercel.app');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.sendStatus(200);
  } else {

    res.status(500).send('uncaught error....');
  }
};