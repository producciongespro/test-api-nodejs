const { Router } = require("express");
const testCtr = require("../controllers/test.controller");

const routerTest = Router();

routerTest.get("/test", testCtr.obtenerData );
routerTest.post("/test", testCtr.postData );
routerTest.put("/test", testCtr.putData );
routerTest.delete("/test", testCtr.deleteData );
routerTest.patch("/test:id", testCtr.patchData );

routerTest.post("/file", testCtr.postFile );




module.exports = routerTest;