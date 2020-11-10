// const express = require('express')
//   , app = express()
//   , bodyParser = require('body-parser')
//   , port = process.env.PORT || 8090


// app.use(express.static('public'))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))


// app.get('/tt_monitor', (req, res) => {
//   res.send('')
// })

// app.listen(port, () => console.log(`Listening on port ${port}`))

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'testDb';

new Promise((resolve, reject) => {
  // Use connect method to connect to the server
  MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, async function (err, client) {
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection('documents');
    // Insert some documents
    const result = await collection.insertMany([{
      a: 1
    }, {
      a: 2
    }, {
      a: 3
    }]);

    client.close();
    resolve("ok")
  });
}).then(msg => {
  console.log(msg)
})