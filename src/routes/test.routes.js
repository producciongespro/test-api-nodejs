const { Router } = require("express");
const testCtr = require("../controllers/test.controller");

const routerTest = Router();

routerTest.get("/", testCtr.obtenerData );
routerTest.post("/", testCtr.postData );
routerTest.put("/", testCtr.putData );
routerTest.delete("/", testCtr.deleteData );
routerTest.patch("/:id", testCtr.patchData );



module.exports = routerTest;