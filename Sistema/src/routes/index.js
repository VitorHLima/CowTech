var express = require("express");
var router = express.Router();

router.get("/cadastro-empresa", function (req, res) {
    res.render("empresa.html");
});

router.get("/login", function (req, res) {
    res.render("login.html");
});

router.get("/sistemaSensor", function (req, res) {
    res.render("index");
});
<<<<<<< HEAD
// router.get("/", function (req, res) {
//     res.render("index.html");
// });
=======

router.get("/Tela Simulador financeiro", function (req, res) {
    res.render("Calculadora Financeira");
});

router.get("/", function (req, res) {
    res.render("index");
});
>>>>>>> e1e9c3275c40c65fa75809eb2a1142ec3f5b5de0

module.exports = router;