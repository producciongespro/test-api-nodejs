const { Router } = require("express");
const testCtr = require("../controllers/test.controller");

const routerTest = Router();

routerTest.get("/", testCtr.obtenerData );

module.exports = routerTest;