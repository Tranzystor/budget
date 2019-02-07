const mongoose = require('mongoose');

const dbName = 'testdb';
const url = `mongodb://localhost:27017/${dbName}`;

const initDb = async () => {
  await mongoose.connect(url, { useNewUrlParser: true }).catch(error => {
    console.log(error);
    return new Error(error);
  });
  console.log('connected');
};

module.exports = initDb;
