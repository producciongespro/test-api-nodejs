const express = require('express')
const routerTest = require("./routes/test.routes");
const app = express();
const fileUpload = require("express-fileupload");
const cors = require ("cors");

app.use (express.json());
app.use( cors () );
app.use (express.static ("public") );
app.use(fileUpload());


app.use("/api", routerTest )

module.exports = app;