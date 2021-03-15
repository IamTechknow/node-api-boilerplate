const Models = require('../models/models');

const helloRoute = (req, res) => {
  _sendOkJSON({ express: 'Hello From Express' }, res);
};

const WorldRoute = (req, res) => {
  _sendOkJSON(
    { express: `I received your POST request. This is what you sent me: ${req.body.post}` },
    res,
    201
  );
};

const _sendOkJSON = (obj, res, code = 200) => {
  res.status(code).type('application/json').send(JSON.stringify(obj));
};

const _sendErrorJSON = (message, res, code = 400) => {
  res.status(code).type('application/json').send(JSON.stringify({ message }));
};

const _catchError = (err, res) => {
  console.error(err);
  _sendErrorJSON('Sorry, an error occurred!', res, 500);
};

module.exports = {
  helloRoute,
  WorldRoute,
};
