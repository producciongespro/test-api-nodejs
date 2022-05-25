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
    res.json (  
        ImprimirInfo(req, res)
    );
};

exports.putData = function (req, res) {
    res.json (  
        ImprimirInfo(req, res)
    );
};

exports.deleteData = function (req, res) {
    res.json (  
        ImprimirInfo(req, res)
    );
};




function ImprimirInfo(req) {
    console.log("Cuerpo de la petición", req.body);
    console.log("authorization", req.headers.authorization);
    const contentType = req.headers['content-type'];
    const data = {
      isOk: true,
      Autorization: `${
        req.headers.authorization ? req.headers.authorization : "No disponible"
      }`,
      contentType: contentType,
      method: req.method,
      dataBody: req.body
    };
    return data;    
}
