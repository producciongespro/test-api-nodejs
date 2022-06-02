exports.obtenerData = function (req, res) {
  const items = [
    {
      id: "123",
      name: "test 01",
      active: true,
    },
    {
      id: "456",
      name: "test 02",
      active: false,
    },
  ];

  res.json(items);
};

exports.postData = function (req, res) {
  res.json(ImprimirInfo(req, res));
};

exports.putData = function (req, res) {
  res.json(ImprimirInfo(req, res));
};

exports.deleteData = function (req, res) {
  res.json(ImprimirInfo(req, res));
};

exports.patchData = function (req, res) {
  console.log("Método", req.method);
  console.log("req.params", req.params);
  res.json({
    isOk: true,
    idParams: req.params.id,
  });
};

exports.sendFile = function (req, res) {
  console.log("Método", req.method, "en controlador 'envio de archivo'");

  res.json(
    {
      isOk:true,
      msj: "Archivo recibido"
    }
  );
  const body = req.body;    
  console.log("header", req.header);  
  console.log("Cuerpo", body);
};

function ImprimirInfo(req) {
  if (req.headers.authorization) {
    console.log("authorization", req.headers.authorization);
  }
  console.log("Método", req.method);
  console.log("req.query", req.query);
  console.log("Cuerpo de la petición", req.body);

  const contentType = req.headers["content-type"];
  const data = {
    isOk: true,
    msj: "Archivo recibido con éxito",
    Autorization: `${
      req.headers.authorization ? req.headers.authorization : "No disponible"
    }`,
    contentType: contentType,
    method: req.method,
    queryStrings: ` ${
      Object.keys(req.query).length != 0
        ? JSON.stringify(req.query)
        : "No disponible"
    }`,
    dataBody: req.body,
  };
  return data;
}
