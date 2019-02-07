const MongoClient = require('mongodb').MongoClient;

let firstCollection = undefined;
module.exports = firstCollection;

const initDb = async () => {
  const dbName = 'testdb';
  const url = `mongodb://localhost:27017/${dbName}`;

  const db = await MongoClient.connect(url, { useNewUrlParser: true });
  const dbb = db.db(dbName);
  const dbList = await dbb.admin().listDatabases();
  console.log(dbList);

  firstCollection = dbb.collection('first');

  const results = await dbb
    .collection('first')
    .find({})
    .toArray();
  console.log(results);

  db.close();
};

module.exports = initDb;
