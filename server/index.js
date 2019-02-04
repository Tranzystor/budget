const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const setupRoutes = require('./routing');
setupRoutes(app);

let port = 1234;

app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});
