const express = require('express');
const bodyParser = require('body-parser');

const run = async () => {
  const app = express();

  const initDb = require('./db');
  await initDb();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  const setupRoutes = require('./routing');
  setupRoutes(app);

  let port = 1234;

  app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
  });
};

run();
