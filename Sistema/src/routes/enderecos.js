var express = require("express");
var router = express.Router();

var enderecoController = require("../controllers/enderecoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar/:idEmpresa", function (req, res) {
    enderecoController.cadastrar(req, res);
})

router.get("/buscar", function (req, res) {
    enderecoController.buscarPorNomeFazenda(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    enderecoController.listar(req, res);
});

module.exports = router;