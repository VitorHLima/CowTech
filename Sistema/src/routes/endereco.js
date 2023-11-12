var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/enderecoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    empresaController.cadastrar(req, res);
})

module.exports = router;