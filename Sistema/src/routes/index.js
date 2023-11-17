var express = require("express");
var router = express.Router();

router.get("/cadastro-empresa", function (req, res) {
    res.render("cadastro-empresa/empresa.html");
});

router.get("/login", function (req, res) {
    res.render("login/login.html");
});

router.get("/sistemaSensor", function (req, res) {
    res.render("sistema.html");
});

router.get("/Tela Simulador financeiro", function (req, res) {
    res.render("Calculadora Financeira");
});

router.get("/inicial", function (req, res) {
    res.render("inicial/index");
});

module.exports = router;