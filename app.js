const express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , port = process.env.PORT || 8090


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('/tt_monitor', (req, res) => {
  res.send('')
})

app.listen(port, () => console.log(`Listening on port ${port}`))
