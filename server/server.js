const express = require('express');

const Routes = require('./routes');

const createServer = (db) => {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get('/api/hello', Routes.helloRoute);
  app.post('/api/world', Routes.WorldRoute);

  return app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = { createServer };
