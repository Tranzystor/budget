const firstCollection = require('../db/index');

const setupRoutes = app => {
  app.get('/', (req, res) => {
    if (firstCollection) {
      console.log('firstCollection firstCollection is available');
    }
    res.send('budget-backend!');
  });
};

module.exports = setupRoutes;
