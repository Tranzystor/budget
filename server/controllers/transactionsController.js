const transactionsDb = require('../db/services/transactionsDBService');

const getAll = async (_, res) => {
  const all = await transactionsDb.getAll();
  res.send(all);
};

const addOne = async (req, res) => {
  await transactionsDb.addOne(req.body);
  res.send(200);
};

module.exports = {
  getAll,
  addOne
};
