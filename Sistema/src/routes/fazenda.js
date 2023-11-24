var express = require("express");
var router = express.Router();

var fazendaController = require("../controllers/fazendaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/publicar/:idUsuario", function (req, res) {
    fazendaController.publicar(req, res);
});
router.get("/BuscarCurral/", function (req, res) {
    fazendaController.BuscarCurral(req, res);
});

module.exports = router;