const transactionsController = require('../controllers/transactionsController');

const setupRoutes = app => {
  app.get('/', transactionsController.getAll);
  app.put('/', transactionsController.addOne);
};

module.exports = setupRoutes;
