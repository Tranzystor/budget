const models = require('../models');

const { Transaction } = models;

const getAll = async () => await Transaction.find({}).exec();

const addOne = async transaction => {
  const newTrans = new Transaction({ ...transaction });
  return await newTrans.save();
};

module.exports = { getAll, addOne };
