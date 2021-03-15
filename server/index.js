const { getDB } = require('../models');
const { createServer } = require('./server');

const runServer = async () => {
  const db = await getDB();
  const server = createServer(db);

  process.on("SIGINT", () => {
    db.end();
    server.close();
  });
};

runServer();
