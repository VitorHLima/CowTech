var express = require("express");
var router = express.Router();

var sensorController = require("../controllers/sensorController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/publicar/", function (req, res) {
    sensorController.publicar(req, res);
});
router.post("/listar/", function (req, res) {
    sensorController.listar(req, res);
});
router.post("/mostrar/", function (req, res) {
    sensorController.buscarAquariosPorEmpresa(req, res);
});


module.exports = router;