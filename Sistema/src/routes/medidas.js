var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:fkSensor", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:fkSensor", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

router.get("/semanal/:fkSensor", function (req, res) {
    medidaController.buscarMedidasSemanal(req, res);
});

module.exports = router;