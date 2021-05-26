const express = require('express')
const app = express()


app.use (express.static ("public") );

app.get('/test', (req, res) => {
  res.send('get')
})

module.exports = app;