var express = require("express");
var router = express.Router();

var sensorController = require("../controllers/sensorController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/publicar/:idUsuario", function (req, res) {
    sensorController.publicar(req, res);
});
router.post("/listar/", function (req, res) {
    sensorController.listar(req, res);
});


module.exports = router;