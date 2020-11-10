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



async function a() {
  const MongoClient = require('mongodb').MongoClient;
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(async err => {
    const collection = client.db("test").collection("devices");
    const result = await collection.insertMany([{
      a: 1
    }, {
      a: 2
    }, {
      a: 3
    }]);
    console.log(result);
    client.close();
  });

  
}

a();

