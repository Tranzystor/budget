const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  transactionId: Number,
  amount: Number,
  description: String,
  operationDate: Date,
  comment: String
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
