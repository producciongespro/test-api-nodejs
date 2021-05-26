const express = require('express')
const routerTest = require("./routes/test.routes");
const app = express()


app.use (express.static ("public") );

app.use("/test", routerTest )

module.exports = app;