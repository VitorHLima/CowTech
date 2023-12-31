var express = require("express");
var router = express.Router();

var curralController = require("../controllers/curralController");

router.post("/cadastrar", function (req, res) {
    curralController.cadastrar(req, res);
});
router.get("/buscar", function (req, res) {
    curralController.buscarPorNomeCurral(req, res);
});
router.get("/listar/", function (req, res) {
    curralController.listar(req, res);
});

module.exports = router;