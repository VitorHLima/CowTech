var express = require("express");
var router = express.Router();

var sensorController = require("../controllers/empresaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/sensores/dht11/umidade", function (req, res) {
    sensorController.cadastrar(req, res);
})

router.post("/sensores/lm35/temperatura", function (req, res) {
    sensorController.autenticar(req, res);
});

module.exports = router;