

exports.obtenerData = function (req, res) {

    const items = [{
        id: "123",
        name: "test 01",
        active: true
    },
    {
        id: "456",
        name: "test 02",
        active: false
    }
]

    res.json(items);
    
}