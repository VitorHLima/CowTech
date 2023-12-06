var express = require("express");
var router = express.Router();

var sensorController = require("../controllers/sensorController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/publicar/", function (req, res) {
    sensorController.publicar(req, res);
});
router.get("/listar/:idEmpresa", function (req, res) {
    sensorController.listar(req, res);
});
router.post("/mostrar/", function (req, res) {
    sensorController.listarSensores(req, res);
});
router.get("/todos/:idEmpresa", function (req, res) {
    sensorController.todosSensores(req, res);
});

module.exports = router;