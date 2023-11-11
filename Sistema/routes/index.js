var express = require("express");
var router = express.Router();

router.get("/cadastrar", function (req, res) {
    res.render("cadastro.html");
});

router.get("/login", function (req, res) {
    res.render("index");
});
router.get("/sistema", function (req, res) {
    res.render("sistema.html");
});
router.get("/inicial", function (req, res) {
    res.render("inicial.html");
});

module.exports = router;