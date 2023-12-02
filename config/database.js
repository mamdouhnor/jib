// this code from (https://medium.com/@gwilakers/structuring-your-node-js-app-67d20c2ab8a3) ,
const MongoClient = require('mongodb').MongoClient;

const connectToMongoDB = async () => {
  const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
  const db = client.db('your_database_name');
  return db;
};

module.exports.database = connectToMongoDB();
// End medium here .