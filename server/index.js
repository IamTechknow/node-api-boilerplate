const express = require('express');

const { getDB } = require('../models');

let db;

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  _sendOkJSON({ express: 'Hello From Express' }, res);
});

app.post('/api/world', (req, res) => {
  _sendOkJSON(
    { express: `I received your POST request. This is what you sent me: ${req.body.post}` },
    res,
    201
  );
});

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

const runServer = async () => {
  db = await getDB();

  const server = app.listen(port, () => console.log(`Listening on port ${port}`));
  process.on("SIGINT", () => {
    db.end();
    server.close();
  });
};

runServer();
