const setupRoutes = app => {
  app.get('/', function(req, res) {
    res.send('budget-backend!');
  });
};

module.exports = setupRoutes;
